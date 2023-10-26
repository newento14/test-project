import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import TabsComponent from "./components/TabsComponent";
import data from "./tabs.json";

function App() {
    const [currentTab, setCurrentTab] = useState(0);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        setTabs(data.sort((a, b) => a.order - b.order));
    }, []);

    return (
        <>
            {tabs.length !== 0 && <HashRouter>
                <TabsComponent value={currentTab} tabs={tabs} />
                <Routes>
                    {tabs.map((x) => (
                        <Route path={`/${x.id}`} element={<Tab path={x.path} setValue={setCurrentTab} value={x.order} />} />
                    ))}
                    <Route path="/" element={<Tab path={tabs[0].path} setValue={setCurrentTab} value={0} />} />
                </Routes>
            </HashRouter>}
        </>
    );
}

function Tab({ path, setValue, value }) {
    setValue(value);

    const Component = require(`./${path}`).default;
    return (
        <Component />
    );
}

export default App;
