const CoinColumnHeader = (props: { coin: string }) => {
  const coin = props.coin.charAt(0).toUpperCase() + props.coin.slice(1)
  return <span>{coin}</span>
}

export default CoinColumnHeader
