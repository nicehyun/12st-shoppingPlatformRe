"use client"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"

import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { useEffect, useState } from "react"
import { useGetCategoriesQuery } from "../hooks/useGetCategoriesQuery"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import { CategoryHierarchy } from "../types/category"

export default function CategoryDrawer() {
  const [isShowCatrgoryDrawer, setIsShowCategoryDrawer] = useState(true)
  // const { categories } = useGetCategoriesQuery()

  // console.log(categories)

  const toggleDrawer =
    (isShow: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setIsShowCategoryDrawer(isShow)
    }

  // const list = () => (
  //   <Box
  //     sx={{ width: 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <List>
  //       {Object.entries(categories).map(([category, subCategories], index) => (
  //         <ListItem key={"test"} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={"test"} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // )

  // const renderCategories = (categories: CategoryHierarchy | undefined) => {
  //   if (!categories) return

  //   return Object.entries(categories).map(([category, subCategories]) => (
  //     <Accordion key={category}>
  //       <AccordionSummary>
  //         <Typography>{category}</Typography>
  //       </AccordionSummary>
  //       <AccordionDetails>
  //         {subCategories && typeof subCategories === "object" ? (
  //           renderCategories(subCategories as CategoryHierarchy)
  //         ) : (
  //           <Typography>
  //             {subCategories &&
  //               Object.keys(subCategories).map((subCategory) => (
  //                 <div key={subCategory}>{subCategory}</div>
  //               ))}
  //           </Typography>
  //         )}
  //       </AccordionDetails>
  //     </Accordion>
  //   ))
  // }

  return (
    <Drawer anchor={"left"} open={false} onClose={toggleDrawer(false)}>
      {/* {renderCategories(categories)} */}
      {/* {list()} */}
    </Drawer>
  )
}
