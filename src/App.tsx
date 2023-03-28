import { ContactUs, GeneralLayout } from "components";
import { useRef } from "react";
import { Route, Routes } from "react-router";

export const App = () => {
  //The ref for implementing the scrolling to the certain section
  const featuresRef = useRef<HTMLElement>(null);

  return (
    <Routes>
      <Route path="/" element={<GeneralLayout ref={featuresRef} />}>
        <Route index element={<ContactUs ref={featuresRef} />} />
        {/*As we don't have any other router, I imitate the behaviour of routing using NavLink's in the header*/}
        <Route path="*" element={<ContactUs ref={featuresRef} />} />
      </Route>
    </Routes>
  );
};

export default App;