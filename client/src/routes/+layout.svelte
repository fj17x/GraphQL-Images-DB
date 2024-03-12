<script>
  import { userDetails } from "../stores/userDetails.js"
  import { onMount } from "svelte"
  import "bootstrap/dist/css/bootstrap.min.css"
  import "@fortawesome/fontawesome-free/css/all.min.css"

  const checkSignedIn = async () => {
    const response = await fetch(`http://localhost:4001/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query Me {
              me {
                  message
                  data {
                    id
                    userName
                    isAdmin
                    createdAt
                    updatedAt
                    destroyTime
                    imagesUploaded
                  }     
              }
          }
        `,
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const reply = await response.json()
    let responseUserData = reply.data.me.data
    if (reply.errors) {
      {
        userDetails.set({})
        return
      }
    }

    userDetails.set(responseUserData)
  }

  onMount(async () => {
    await checkSignedIn()
  })
</script>

<slot />

<style>
  :root {
    font:
      1.2em "Fira Sans",
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
  }
</style>
