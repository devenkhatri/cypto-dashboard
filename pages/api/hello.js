// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ccxt from 'ccxt';

export default async function handler(req, res) {
  const binance = new ccxt.binance ({'apiKey': process.env.APIKEY, 'secret': process.env.SECRETKEY})
  const balance = await binance.fetchBalance ()    
  const total = balance['total']
  // console.log(total)
  const coinList = [];
  for (const coin in total) {
    if(total[coin]>0){
      // console.log(coin.replace('LD',''),total[coin]," ++ ")
      coinList.push(coin.replace('LD','')+'/USDT')
    }          
  }
  // console.log(coinList)

  //Now getting current price of all the available coins
  const coinTickers = await binance.fetchTickers (coinList)    
  // console.log(coinTickers)

  let openBalance = 0;
  let currentBalance = 0;

  for (const coin in total) {
    if(total[coin]>0){      
      openBalance += total[coin] * coinTickers[coin.replace('LD','')+'/USDT'].open;
      currentBalance += total[coin] * coinTickers[coin.replace('LD','')+'/USDT'].close;
      console.log(coin, total[coin], coinTickers[coin.replace('LD','')+'/USDT'].open, openBalance)
      // coinList.push(coin.replace('LD','')+'/USDT')
    }          
  }

  // res.status(200).json({ raw: balance, balance: {open: openBalance, current: currentBalance} })
}
