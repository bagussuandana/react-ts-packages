import { BaseLayout } from "@visiarch/admin-panel-layout";
import AppLogo from "./components/svg/app-logo";
import SideMenu from "./components/side-menu";

function App() {
    return (
        <BaseLayout
            brand={
                <div className="inline-flex gap-2 items-center">
                    <AppLogo className="w-8 h-8" /> <span>visiarch</span>
                </div>
            }
            iconBrand={<AppLogo className="w-8 h-8" />}
            sideMenu={<SideMenu />}
            topbarEnd={<div>topbar-end</div>}
        >
            <main>test</main>
        </BaseLayout>
    );
}

export default App;
