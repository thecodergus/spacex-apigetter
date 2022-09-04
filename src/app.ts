import { Requests } from "./tools"
import type { Ship } from "./types"

const app = async () => {
      const query: string = `
    {
      ships {
        name
        active
        missions {
          name
        }
      }
    }
  `
  const query_url: string = "https://api.spacex.land/graphql/"

  const query_result = (await Requests.requestQL(query_url, query)).ships.filter((s: Ship) => s.active)

  console.log(query_result)


}


app()