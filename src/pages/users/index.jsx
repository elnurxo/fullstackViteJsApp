import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../utils/axiosData";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAndSetUsers = async () => {
      try {
        setLoading(true);
        const getUserResponse = await getUsers();
        if (getUserResponse.status === 200) {
          setUsers(getUserResponse.data);
        } else {
          navigate("/not-found");
          setUsers([]);
        }
        setLoading(false);
      } catch (err) {
        setUsers([]);
        navigate("/not-found");
      }
    };
    getAndSetUsers();
  }, [navigate]);

  // const getAndSetUsers = async () => {
  //   try {
  //     setLoading(true);
  //     const getUserResponse = await getUsers();
  //     if (getUserResponse.status === 200) {
  //       setUsers(getUserResponse.data);
  //     } else {
  //       navigate("/not-found");
  //       setUsers([]);
  //     }
  //     setLoading(false);
  //   } catch (err) {
  //     setUsers([]);
  //     navigate("/not-found");
  //   }
  // };
  return (
    <>
      <div className="container">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>User Data Table</TableCaption>
            <Thead>
              <Tr>
                <Th>User Name</Th>
                <Th>User Birth Date</Th>
                <Th isNumeric>User Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                users.map((user)=>{
                  return(
                    <Tr>
                    <Td>{user?.firstname} {user?.lastname}</Td>
                    <Td>{user?.lastname}</Td>
                    <Td isNumeric>{user?.email}</Td>
                  </Tr>
                  )
                })
              }
            
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Users;
