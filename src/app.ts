import { Requests, writeCSV, process_data } from "./tools"

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

  const query_result = await Requests.requestQL(query_url, query)
 
  writeCSV(await process_data(query_result))

}


app()