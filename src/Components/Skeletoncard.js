import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Skeletoncard() {
  return (
    <>
      <SkeletonTheme>
        <section id="product1" className="section-p1">
          <div className="pro-container">
            <div className="pro">
              <Skeleton height={150}>
                <img src="" alt="Loading" />
              </Skeleton>
              <div className="des">
                <span>
                  <Skeleton width={40} />
                </span>
                <h5>
                  <Skeleton width={100} />
                </h5>
                <div className="star">
                  <Skeleton width={80} />
                </div>
                <h4>
                  <Skeleton width={40} />
                </h4>
              </div>
              <a href="/">
                <Skeleton className="cart" />
              </a>
            </div>
            <div className="pro">
              <Skeleton height={150}>
                <img src="" alt="Loading" />
              </Skeleton>
              <div className="des">
                <span>
                  <Skeleton width={40} />
                </span>
                <h5>
                  <Skeleton width={100} />
                </h5>
                <div className="star">
                  <Skeleton width={80} />
                </div>
                <h4>
                  <Skeleton width={40} />
                </h4>
              </div>
              <a href="/">
                <Skeleton className="cart" />
              </a>
            </div>
            <div className="pro">
              <Skeleton height={150}>
                <img src="" alt="Loading" />
              </Skeleton>
              <div className="des">
                <span>
                  <Skeleton width={40} />
                </span>
                <h5>
                  <Skeleton width={100} />
                </h5>
                <div className="star">
                  <Skeleton width={80} />
                </div>
                <h4>
                  <Skeleton width={40} />
                </h4>
              </div>
              <a href="/">
                <Skeleton className="cart" />
              </a>
            </div>
            <div className="pro">
              <Skeleton height={150}>
                <img src="" alt="Loading" />
              </Skeleton>
              <div className="des">
                <span>
                  <Skeleton width={40} />
                </span>
                <h5>
                  <Skeleton width={100} />
                </h5>
                <div className="star">
                  <Skeleton width={80} />
                </div>
                <h4>
                  <Skeleton width={40} />
                </h4>
              </div>
              <a href="/">
                <Skeleton className="cart" />
              </a>
            </div>
          </div>
        </section>
      </SkeletonTheme>
    </>
  );
}

export default Skeletoncard;
