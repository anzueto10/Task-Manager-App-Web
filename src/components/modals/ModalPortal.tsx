"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalContainer = document.createElement("div");
    document.body.appendChild(portalContainer);
    portalContainerRef.current = portalContainer;

    return () => {
      if (portalContainerRef.current) {
        document.body.removeChild(portalContainerRef.current);
      }
    };
  }, []);

  return portalContainerRef.current
    ? ReactDOM.createPortal(children, portalContainerRef.current)
    : null;
};

export default Portal;
