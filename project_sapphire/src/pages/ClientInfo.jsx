import { Box, Button, Divider, Flex, FormControl, FormLabel, Input, Stack,
    FormHelperText, InputGroup, InputLeftAddon, Textarea, } from '@chakra-ui/react'


export const ClientInfoCard = (props) => (
    <Box as="form" bg="bg.surface" boxShadow="sm" borderRadius="lg" {...props}>
      <Stack
        spacing="5"
        px={{
          base: '4',
          md: '6',
        }}
        py={{
          base: '5',
          md: '6',
        }}
      >
        <Stack
          spacing="6"
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input defaultValue="" />
          </FormControl>
          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input defaultValue="" />
          </FormControl>
        </Stack>
        <FormControl id="street">
          <FormLabel>Street</FormLabel>
          <Input defaultValue="" />
        </FormControl>
        <Stack
          spacing="6"
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input defaultValue="" />
          </FormControl>
          <FormControl id="state">
            <FormLabel>State / Province</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="zip">
            <FormLabel>ZIP/ Postal Code</FormLabel>
            <Input defaultValue="" />
          </FormControl>
        </Stack>
      </Stack>
      <Divider />
      <Flex
        direction="row-reverse"
        py="4"
        px={{
          base: '4',
          md: '6',
        }}
      >
        <Box bg="bg.surface" boxShadow="sm" borderRadius="lg" flex="1" {...props}>
    <Stack
      spacing="5"
      px={{
        base: '4',
        md: '6',
      }}
      py={{
        base: '5',
        md: '6',
      }}
    >
      <FormControl id="website">
        <FormLabel>Your Website</FormLabel>
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input defaultValue="" />
        </InputGroup>
      </FormControl>
      <FormControl id="bio">
        <FormLabel>Business Needs</FormLabel>
        <Textarea rows={3} resize="none" />
        <FormHelperText color="fg.subtle">Brief description of project</FormHelperText>
      </FormControl>
      <FormControl id="picture">
        <Stack
          spacing={{
            base: '3',
            md: '5',
          }}
          direction={{
            base: 'column',
            sm: 'row',
          }}
        >
        </Stack>
      </FormControl>
    </Stack>
    <Divider />
    <Flex
      direction="row-reverse"
      py="4"
      px={{
        base: '4',
        md: '6',
      }}
    >
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Flex>
  </Box>
      </Flex>
    </Box>
  )