import { Avatar } from "@material-ui/core";
import { ListAvatarStyle } from "./style";

const ListAvatar = ({ participants }) => {
  return (
    <ListAvatarStyle max={6}>
      {participants.map((user, index) => (
        <Avatar key={index} alt={user} src="" />
      ))}
    </ListAvatarStyle>
  );
};

export default ListAvatar;
