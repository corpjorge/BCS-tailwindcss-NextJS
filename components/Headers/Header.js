import React from "react";
import CardStats from "../Cards/CardStats.js";

export default function Header() {
  return (
    <>
      <div className="md:pt-32 pb-15 pt-12 md:ml-52">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Info 1"
                  statTitle="350"
                  statArrow="up"
                  statPercent="3"
                  statPercentColor="text-emerald-500"
                  statDescripiron="  last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Info 2"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3"
                  statPercentColor="text-red-500"
                  statDescripiron="  last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Info 3"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1"
                  statPercentColor="text-orange-500"
                  statDescripiron="  yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Info 4"
                  statTitle="4%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="  last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
