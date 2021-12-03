import MsgItem from "./MsgItem"

const UserIds = ['roy','jay']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const msgs = Array(50).fill(0).map((_, i) => ({
    id: i +1,
    userid: getRandomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60, //msec 단위를 sec으로 바꾼 뒤 매 분으로 넘어가게 변경
    text: (i+1) + ' mock text'
}))
/* const msgs = [
    {
        id: 1,
        userid: getRandomUserId(),
        timestamp: 1234567890123,
        text: '1 mock text'
    }
]
*/

const MsgList = () => (
    <ul className = "messages">{
        msgs.map(x => <MsgItem key={x.id} {...x}/>)
    }</ul>
)

export default MsgList