// не знаю на сколько это было нужно реализовывать или нет, но в квери к урлу добавляются при переходе с телеги и
// забираются через match вторым параметром у компонента
const cartKey: string = 'cart-8f23fa09-c277-424a-9604-f5dd1c859bea'
const botKey: string = 'c7736d90-a435-4f22-920a-1f5d9ce77fb3'
const uuid: string = '083ddbf0-c186-46cf-92db-b67ac2a18e7f'
const closeUrl: string = 'https://refer.id/?bot=demo_webview_bot&platform=telegram&verbose_name=Бот для собеседований&is_close_url=1'
const headers: object = { 'bot-key': botKey }
const cartUrl = `https://dashboard.fstrk.io/api/partners/chats/${uuid}/variables/`
const chatUrl: string = `https://dashboard.fstrk.io/api/partners/chats/${uuid}/push/`

const chatPayload = {
  get_params: {
    base_url: 'https://dashboard.fstrk.io',
    bot_key: botKey,
    cart_variable: cartKey,
    chat_uuid: uuid,
    ecommerce: '8f23fa09-c277-424a-9604-f5dd1c859bea',
    ecommerce_url: 'https://fasttrack-ecom-fashion.flex.fstrk.io',
    is_async: false,
    on_close_url: closeUrl,
    on_success_node: '48955',
    primary_color: '0d92d2',
  },
  is_async: false,
  node: '48955',
}

export {
  cartKey,
  headers,
  cartUrl,
  chatUrl,
  closeUrl,
  chatPayload,
}