import { createObjectCsvWriter } from "csv-writer"
import { FinalData } from "../types"

const writeCSV = async (records: FinalData[]) => {
    const csvWriter = await createObjectCsvWriter({
        path: `./csv/${Date.now()} - output.csv`,
        header: [
            { id: "ship_name", title: "SHIP NAME" },
            { id: "missions", title: "MISSIONS" }
        ],
        fieldDelimiter: ";"
    })
    csvWriter.writeRecords(records)
}

export {
    writeCSV
}