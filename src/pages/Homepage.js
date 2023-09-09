import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignContent="center"
        p="3 "
        bg={"white"}
        w="100%"
        m="12% 0 6% 0"
        borderRadius="lg"
        borderWidth="1px"
        paddingLeft="40%"
      >
        <Text fontSize="4xl" fontFamily="Bad Script" color="#7c6397">
          Convo
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        color="black"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
