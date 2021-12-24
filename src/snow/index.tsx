
import "./style.scss";
import {useEffect} from "react";

const Snow = () => {

    useEffect(() => {
        const snowIcon = document.getElementById("snowIcon").textContent;
        const canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        /* 定义x为窗口宽度，y为窗口高度 */
        let windowX = window.outerWidth;
        let windowY = window.outerHeight;
        /* 定义数组，是为了存储每一片雪与雪花的信息 */
        const snowArray: { x: number; y: number; r: number; color: string; }[] = [];
        /* 假设有600片雪 */
        const snowNum = 600;
        /* 绑定窗口大小发生改变事件，让canvas随时铺满浏览器可视区 */
        window.onresize = resize(canvas, windowX, windowY);
        resize(canvas, windowX, windowY);

        for (let i = 0; i < snowNum; i++) {
            snowArray.push({
                x: windowX * Math.random(),
                y: windowY - 100 * Math.random(),
                r: Math.random() * 5,
                color: `rgba(255,255,255,${Math.random()})`
            })
        }

        setInterval(function () {
            /* 清屏 */
            ctx.clearRect(0, 0, windowX, windowY);
            /* 绘制 */
            draw(ctx, snowNum, snowArray, snowIcon);
            /* 更新 */
            updated(ctx, snowNum, snowArray, windowX, windowY);
        }, 10)

    }, []);

    function resize(canvas){
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
    };

    function draw(ctx, num, arr, snowIcon) {
        /* 遍历数组 */
        for (let i = 0; i < num; i++) {
            var item = arr[i];
            /* 创建路径 */
            ctx.beginPath();
            /* 给雪设置颜色 */
            ctx.fillStyle = item.color;
            /* 绘制雪 */
            ctx.arc(item.x, item.y, item.r, 0, 2 * 3.14, false);
            /* 如果i%30==0才绘制雪花，雪花不用太多 */
            if (i % 20 === 0) {
                /* 绘制雪花图片 */
                ctx.fillStyle = "#FFF";
                ctx.font = `${ item.r * 10}px serif`
                ctx.fillText(snowIcon, item.x, item.y);
            }
            /* 填充路径 */
            ctx.fill();
        }
    }

    function updated(ctx, num, arr, windowX, windowY) {
        for (let i = 0; i < num; i++) {
            var item = arr[i];
            /* x轴位置+0.1，变化小点 */
            item.x = item.x + 0.1;
            /* y轴位置+自身半径一半，这样越大的学走越快 */
            item.y = item.y + item.r / 2;
            /* 如果学已经走出窗口 */
            if (item.y > windowY) {
                /* 重新给雪数组赋值 */
                arr[i] = {
                    x: windowX * Math.random(),
                    y: -10,
                    r: Math.random() * 5,
                    color: `rgba(255,255,255,${Math.random()})`
                }
            }
        }

    }


    return (
        <div className="snowWrapper">
            {/*<div className="snow">*/}
            {/*    <div>*/}
            {/*        &#10053;*/}
            {/*    </div>*/}
            {/*    <div className="a1">*/}
            {/*        &#10053;*/}
            {/*    </div>*/}
            {/*    <div className="a2">*/}
            {/*        &#10053;*/}
            {/*    </div>*/}
            {/*    <div className="a3">*/}
            {/*        &#10053;*/}
            {/*    </div>*/}
            {/*    <div className="a4">*/}
            {/*        &#10053;*/}
            {/*    </div>*/}
            {/*    <div className="a5">*/}
            {/*    </div>*/}
            {/*    <div className="a6">*/}
            {/*    </div>*/}
            {/*    <div className="a7">*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="point">*/}
            {/*    {*/}
            {/*        new Array(50).fill(1).map(item => {*/}
            {/*            return <div />*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            <span id="snowIcon" hidden={true}>
                &#10053;
            </span>
            <canvas id="canvas" />
        </div>
    );
}

export default Snow;
