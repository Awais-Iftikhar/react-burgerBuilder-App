import Classes from './DrawerToggle.module.css';
const drawerToggle = (props) => (
    <div className={Classes.DrawerToggle} onClick={props.clicked} style={{cursor: 'pointer'}}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;