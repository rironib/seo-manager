"use client";
import React, { createContext, ReactNode, useContext } from "react";
import { Seo, SeoProps } from "./Seo";

interface SeoContextType {
  config?: SeoProps;
}

const SeoContext = createContext<SeoContextType | undefined>(undefined);

export const useSeoContext = () => {
  const context = useContext(SeoContext);
  return context || { config: {} };
};

export const SeoProvider: React.FC<{
  children: ReactNode;
  defaultSeo?: SeoProps;
}> = ({ children, defaultSeo }) => {
  return (
    <SeoContext.Provider value={{ config: defaultSeo }}>
      {defaultSeo && <Seo {...defaultSeo} />}
      {children}
    </SeoContext.Provider>
  );
};
