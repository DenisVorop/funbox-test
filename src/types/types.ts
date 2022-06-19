export type TCard = {
    title: string
    label: string
    taste: string
    infos: TInfos[]
    weight: string
    status: TStatus[]
}

export type TInfos = {
    amount: string | null
    text: string
}

export type TStatus = {
    status: string
    text: string
    action: string | null
}
