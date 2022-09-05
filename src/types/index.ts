export interface Ship{
    name: string
    active: boolean
    missions: Mission[]
}

export interface Mission{
    name: string
}

export interface FinalData{
    name: string
    missions: string
}