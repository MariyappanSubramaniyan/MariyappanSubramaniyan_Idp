import { List, ListItem, ListItemText, Button, Typography } from "@mui/material";
import UserForm from "@components/molecules/UserForm";
import { useUserManager } from "./hooks";

const UserManager = () => {
  const { users, selected, handleSubmit, handleDelete, setSelected } = useUserManager();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <UserForm
        selected={selected}
        onSubmit={handleSubmit}
        onCancel={() => setSelected(null)}
      />
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            secondaryAction={
              <>
                <Button onClick={() => setSelected(user)}>Edit</Button>
                <Button color="error" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </>
            }
          >
            <ListItemText primary={user.name} secondary={`Age: ${user.age}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default UserManager;
