import React, { Suspense } from "react";

const Layout = () => {
  const LazyMenuCategory = React.lazy(() => import("../components/MenuCategory/MenuCategory"));
  const LazyBasket = React.lazy(() => import("../components/Basket/Basket"));

  return (
    <>
      <div className="flex justify-between">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMenuCategory />
          <LazyBasket />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
