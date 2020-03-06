

export const makePiece = (player,iconUrl) => {
    return{player:player, style:{backgroundImage:`url(${iconUrl})`}}
}
