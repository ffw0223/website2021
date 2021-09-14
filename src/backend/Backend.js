import React, { useState } from "react";
import Config from "../Config";
import "./Backend.scss";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const Backend = _ => {
	const [isLogin, setIsLogin] = useState(false);
	const [inputName, setInputName] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [mailSubject, setMailSubject] = useState("")
	const [htmlContent, setHTMLContent] = useState("")
	const [token, setToken] = useState("");

	const handleChange = event => {
		const buttonId = event.target.id;

		if (buttonId === "userName") {
			setInputName(event.target.value);
		}

		if (buttonId === "userPassword") {
			setInputPassword(event.target.value);
		}

		if (buttonId === "mailSubject") {
			setMailSubject(event.target.value);
		}
	}

	const handleLogin = async _ => {
		const result = await (await fetch(Config.baseMailAPI + Config.loginAPI, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: inputName,
				password: inputPassword
			})
		})).json();

		setToken(result.token);
		setIsLogin(true);
	}

	const receiveHtml = content => {
		setHTMLContent(content.html);
	}

	const handleDownload = async _ => {
		fetch(Config.baseMailAPI + Config.csvURL, {
			method: "GET",
			headers: {
				'Content-Type': 'text/csv; charset=utf-8',
				'Authorization': token
			}
		}).then(res => res.blob().then(blob => {
			const filename = "users.csv";
			const a = document.createElement('a');
			const url = window.URL.createObjectURL(blob);
			a.href = url;
			a.target = "_blank";
			a.download = filename;
			a.click();
			window.URL.revokeObjectURL(url);
		}));
	}

	const handleSend = async _ => {
		if (!token) {
			window.alert("token不存在，请重新登录。");
		}

		if (window.confirm("确认向所有用户群发此邮件吗？")) {
			const result = await (await fetch(Config.baseMailAPI + Config.sendMailAPI, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': token
				},
				body: JSON.stringify({
					subject: mailSubject,
					content: htmlContent
				})
			})).json();

			if (result.status === 1) {
				window.alert("邮件已发送，正在群发中……");
			} else {
				console.warn(result.message);
			}
		}
	}

	const loginForm = (<div className="backendLoginForm">
		<input id="userName" placeholder="管理员用户名" onChange={handleChange} />
		<input id="userPassword" type="password" placeholder="管理员密码" onChange={handleChange} />
		<button onClick={handleLogin}>登录</button>
	</div>);

	const composeForm = (<div className="backendComposeForm">
		<input id="mailSubject" placeholder="邮件主题" onChange={handleChange} style={{ width: "100%" }} />

		<MdEditor style={{
			width: "100%",
			height: '500px'
		}}
			renderHTML={text => mdParser.render(text)}
			onChange={receiveHtml} />

		<div style={{
			display: "flex",
			justifyContent: "space-between",
			width: "100%"
		}}>
			<button style={{ width: "150px" }} onClick={handleDownload}>下载用户数据文件</button>

			<button
				onClick={handleSend}
				disabled={!mailSubject || !htmlContent || htmlContent.length < 10}
				style={{ width: "100px" }}>群发邮件</button>
		</div>
	</div>)

	return (<div className="backendLayout">
		{!isLogin && loginForm}
		{isLogin && composeForm}
	</div>);
};

export default Backend;