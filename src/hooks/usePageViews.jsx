import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageViews = () => {
  //useLocation hooks gives access to current location object
  let location = useLocation();

  //useEffect hook is called whenever location changes
  useEffect(
    () => {
      //call your API or google analytics to send information about page loaded
      //OR do activity to be done on each page load
      console.log("Page Loaded -  " + location.pathname);
    },
    //useEffect called again when location is changed
    [location]
  );
};

export default usePageViews;
