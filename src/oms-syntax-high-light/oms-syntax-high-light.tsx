/**
 * 代码高亮组件
 * 2023/06/03
 */
import React from 'react';
import {copyText} from "@/utils/index.ts";
import {FileCopy} from "ayongUI";
    import style from './index.module.less'
import {Message} from 'ayongUI';

interface OmsSyntax {
    darkMode: string;
    textContent: string;
    language: string;
    onClick?: () => void;
}

const OmsSyntaxHighlight = ({
                                textContent = '',
                                language = 'javascript',
                            }: OmsSyntax) => {


    if (!textContent) return;
    const onCopy = () => {
        Message.info({message: '复制成功'});
        copyText(textContent)
    }

    return (
        <div className={style.highlighterBox}>
            <FileCopy className={style.copy} onClick={onCopy}/>
                {String(textContent).replace(/\n$/, '')}

        </div>

    );
};

export default OmsSyntaxHighlight;