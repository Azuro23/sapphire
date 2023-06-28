import { Box,
Stack,
Heading,
Text,
 } from "@chakra-ui/react"

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow="2xl" borderWidth="" {...rest}>
        <Heading size={{ base: 'sm', md: 'xl', }} color="#FCB721" >{title}</Heading>
        <Text fontSize={{ base: 'lg', md: 'xl',  }} color="#FCB721"mt={4}>{desc}</Text>
      </Box>
    )
  }
  
  export default function StackEx() {
    return (
      <Stack spacing={8}>
        <Feature
          title="What we do"
          desc="The Azuro Agency is a network of software developers that specialize in web design and development."
        />
        <Feature
          title="How we do"
          desc="Unlike other technology staffing companies, our agency offers a flexible and dynamic approach to meeting your development goals. — we offer our clients the option to hire either an individual developer or an entire team all at once. — we simplify the hiring process by providing vetted portfolios for each of our software specialists. — we maintain a network of support and training to ensure our specialists are always ready and up to date with industry practices.
          
          Our agency has specialists capable of handling a wide range of technical areas, such as: — Front End Web Development —Back End Web Development —Full Stack Development —UI/UX Application Design —Social Media Branding —User Experience Research —General Media Management —And Much More”"
        />
      </Stack>
    )
  }
  (<StackEx />)
