import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Box,
} from "@mui/material";

import ListItemProgress from "../components/ui/ListItemProgress";
import SlowReader from "../components/SlowReader/SlowReader";

import stackList from "../data/stackList.js";

export default function Home() {
    return (
        stackList.length && (
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <Typography component={"div"}>
                    <SlowReader
                        id="slow-reader-home"
                        settings={{
                            showSettings: false,
                            wpm: 300,
                            minHeight: false,
                            border: false,
                            text: "it specialist, web programmer, full-stack developer",
                        }}
                    ></SlowReader>
                </Typography>
                <nav aria-label="secondary">
                    <List>
                        {stackList.map((stackItem, i) => (
                            <ListItem key={i}>
                                <ListItemButton className="list-item-button">
                                    <ListItemAvatar>
                                        <Avatar
                                            className="avatar"
                                            src={stackItem.icon}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={stackItem.name}
                                        secondary={stackItem.secondary}
                                    />
                                </ListItemButton>
                                <ListItemProgress
                                    progress={stackItem.progress}
                                    color={stackItem.color}
                                ></ListItemProgress>
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Box>
        )
    );
}
