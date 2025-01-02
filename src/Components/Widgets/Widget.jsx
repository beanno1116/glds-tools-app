import ActionMenuWidget from "./Components/ActionMenuWidget/ActionMenuWidget";
import DetailListWidget from "./Components/DetailListWidget/DetailListWidget";

const Widget = ({ children,...props }) => {
  return (
    <>
    {children}
    </>
  );
}

Widget.DetailList = DetailListWidget;
Widget.ActionMenu = ActionMenuWidget;

export default Widget;