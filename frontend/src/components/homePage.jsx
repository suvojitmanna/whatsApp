import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import ChatList from "../pages/chatSection/chatList";
import { getAllUsers } from "../services/user.services";
import useLayoutStore from "../store/layoutStore";

const HomePage = () => {
  const setSelectedContact = useLayoutStore(
    (state) => state.setSelectedContact,
  );

  const [alluser, setAllUser] = useState([]);

  const getUser = async () => {
    try {
      const result = await getAllUsers();

      console.log("API RESULT 👉", result);

      if (result.status === "success") {
        setAllUser(result.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          {alluser.length === 0 ? (
            <p className="text-center mt-4">No users found</p>
          ) : (
            <ChatList
              contacts={alluser}
              setSelectedContact={setSelectedContact}
            />
          )}
        </motion.div>
      </Layout>
    </div>
  );
};

export default HomePage;
