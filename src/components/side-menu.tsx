import { useBaseLayout } from "@visiarch/admin-panel-layout";
const SideMenu = () => {
    const { isCollapsed } = useBaseLayout();
    console.log(isCollapsed);

    return <div>side-menu</div>;
};

export default SideMenu;
