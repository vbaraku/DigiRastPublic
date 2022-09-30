// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import Cookies from 'universal-cookie';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const cookies = new Cookies();
    const filteredArray = () => {
        let newObj = createShallowCopy(menuItem);
        console.log(cookies.get("isRegistered"))
        if (cookies.get("isRegistered") === "true") {
            newObj.items[0].children = [...menuItem.items[0].children.slice(1,3)];
        }else{
            newObj.items[0].children = [...menuItem.items[0].children.slice(0, 1)];
        }
        return newObj;
    }        
    function createShallowCopy(item){
        return JSON.parse(JSON.stringify(item));
    }
    const navItems = filteredArray().items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });



    return <>{navItems}</>;
};

export default MenuList;
