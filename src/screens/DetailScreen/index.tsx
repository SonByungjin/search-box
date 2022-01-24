import { FC, useEffect } from "react";
import { detailFetch, selectDetailResult } from "modules/detail";
import { selectItemCountById } from "modules/itemList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DetailScreen: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const paramsInfo = params['info']?.split('&') || [];
  const id = paramsInfo[0].split('=')[1];
  const word = paramsInfo[1].split('=')[1];
  const input = paramsInfo[2].split('=')[1];
  const count = useSelector(selectItemCountById(id))
  const detailInfo = useSelector(selectDetailResult);

  useEffect(()=>{
    if(id && word && input) {
      dispatch(detailFetch({
        id,
        word,
      }));
    } else {
      navigate('/');
    }
  }, [params, dispatch, navigate, id, word, input])

  return <div className="pg_detail__wrapper">
      <div className="pg_detail__nav">
        <button onClick={()=>navigate(-1)}>
          뒤로 가기
        </button>
      </div>
      <div className="pg_detail__count">
        <span>조회수:</span>
        <span>{count || 0}</span>
      </div>
      <div className="pg_detail__uri">
        <span>URI:</span>
        <span>{`${detailInfo.uri}.${input}`}</span>
      </div>
    </div>;
};

export { DetailScreen };
