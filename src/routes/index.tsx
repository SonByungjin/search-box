import * as React from 'react';
import { itemListFetch } from "modules/itemList";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { SearchScreen, DetailScreen } from "../screens";

export const RoutesComponent: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemListFetch());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SearchScreen />} />
      <Route path="/detail/:info" element={<DetailScreen />} />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
