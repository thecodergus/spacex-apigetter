import { createObjectCsvWriter } from "csv-writer"

const writeCSV = async (records: [any]) => {
    const csvWriter = await createObjectCsvWriter({
        path: `./csv/${Date.now()} - output.csv`,
        header: [
            { id: "ship_name", title: "SHIP NAME" },
            { id: "missions", title: "MISSIONS" }
        ]
    })
    await csvWriter.writeRecords(records)
}

export {
    writeCSV
}