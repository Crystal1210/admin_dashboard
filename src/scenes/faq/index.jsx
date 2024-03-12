import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography colors={colors.greenAccent[500]} variant="h5">
          What is React
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography colors={colors.blueAccent[500]} variant="h6">
          It is a Front end Javascript library, Developed by Facebook in 2011. It follows component-based approach and allows you to create reusable UI components. It is Used to develop complex, interactive web as well as mobile UI. It's Open-Sourced in 2015 and has a strong foundation and large community.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography colors={colors.greenAccent[500]} variant="h5">
          Advantages of React
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography colors={colors.blueAccent[500]} variant="h6">
          Easy to know how a component is rendered, you just look at the render function., JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other. You can render React on the server-side. It is easy to test, and you can also integrate some tools like jest. It ensures readability and makes maintainability easier. You can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography colors={colors.greenAccent[500]} variant="h5">
          Feature of React
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography colors={colors.blueAccent[500]} variant="h6">
          Uses Virtual Dom. Does Server-side rendering, Follow Unidirectional data flow ie one-way data binding. React’s data flow between components is uni-directional (from parent to child only)., Uses reusable/composable UI components to develop the view.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography colors={colors.greenAccent[500]} variant="h5">
          What is JSX
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography colors={colors.blueAccent[500]} variant="h6">
          JSX stands for Javascript XML- eXtensible Markup Language., Utilizes the expressiveness of Javascript with an HTML - like templates syntax. Makes HTML easy to understand. It is Robust Boosts up the JS performance. JSX expression must have only the outermost element.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography colors={colors.greenAccent[500]} variant="h5">
          What is the Virtual DOM
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography colors={colors.blueAccent[500]} variant="h6">
          The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
}

export default FAQ;