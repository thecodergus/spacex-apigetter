export interface Ship{
    name: string
    active: boolean
    missions: Mission[]
}

interface Mission{
    name: string
}