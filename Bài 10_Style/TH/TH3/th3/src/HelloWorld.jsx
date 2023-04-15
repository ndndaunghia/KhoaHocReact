import React from 'react'
import { MyAppContext } from './MyApp'
import { useContext } from 'react'

export default React.memo(function HelloWorld({onMessageClick}){
    const context = useContext(MyAppContext);

    console.log(context.isLogin);

    return <div onClick={onMessageClick}>{context.message}</div>
})
