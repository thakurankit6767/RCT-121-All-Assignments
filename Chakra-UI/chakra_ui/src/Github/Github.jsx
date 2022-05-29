import {
    Avatar,
    Box,
    Button,
    Center,
    Heading,
    Image,
    SimpleGrid,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
    Text,
    VStack
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  
  function Github() {
    const [loading, setLoading] = useState(true);
    const [error, setErorr] = useState(false);
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      axios({
        url: "https://api.github.com/search/users",
        method: "GET",
        params: {
          q: "masai",
          page: 1,
          per_page: 5
        }
      })
        .then((res) => {
          console.log(res);
          setData(res.data.items);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setErorr(true);
        });
    }, []);
    // sd;
    console.log(data);
    return (
      <Box>
        {loading ? (
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ) : (
          <Box p={2}>
            <Heading> Github Search</Heading>
            <SimpleGrid gap={4} columns={2}>
              {data?.map((item) => (
                <GithubUserCard
                  handleClick={() => alert(item.login)}
                  key={item.id}
                  {...item}
                />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    );
  }
  // login: "masai"
  // id: 497819
  // node_id: "MDQ6VXNlcjQ5NzgxOQ=="
  // avatar_url: "https://avatars.githubusercontent.com/u/497819?v=4"
  // gravatar_id: ""
  // url: "https://api.github.com/users/masai"
  // html_url: "https://github.com/masai"
  // followers_url: "https://api.github.com/users/masai/followers"
  // following_url: "https://api.github.com/users/masai/following{/other_user}"
  // gists_url: "https://api.github.com/users/masai/gists{/gist_id}"
  // starred_url: "https://api.github.com/users/masai/starred{/owner}{/repo}"
  // subscriptions_url: "https://api.github.com/users/masai/subscriptions"
  // organizations_url: "https://api.github.com/users/masai/orgs"
  // repos_url: "https://api.github.com/users/masai/repos"
  // events_url: "https://api.github.com/users/masai/events{/privacy}"
  // received_events_url: "https://api.github.com/users/masai/received_events"
  // type: "User"
  // site_admin: false
  const GithubUserCard = ({ avatar_url, login, html_url, handleClick }) => {
    return (
      <Box>
        <Stack direction="row" boxShadow="lg" p={4}>
          <Center>
            <Avatar name={login} w="50px" src={avatar_url} />
          </Center>
          <VStack>
            <Box>
              <Text>{login}</Text>
              <Text>{html_url}</Text>
              <Button onClick={handleClick}>Click</Button>
              <Text>Subtitle</Text>
            </Box>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Github;
  
  