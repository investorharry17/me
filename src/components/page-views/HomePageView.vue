<script setup>
	import FooterView from "../reusable-views/FooterView.vue"

	// import { ref } from "vue"
	import LightBulb from "../../assets/Creative 1.png"
	import HackathonGuy from "../../assets/Hackathon guy.png"
	import TheBigIdea from "../../assets/The big idea.png"
	import RulesLady from "../../assets/rules-woman.png"
	import Judging from "../../assets/judging.png"
	import FaqImage from "../../assets/faq-image.png"
	import rewards from "../../assets/rewards.png"
	import Gold from "../../assets/gold_medal.png"
	import Silver from "../../assets/silver_medal.png"
	import Bronze from "../../assets/bronze_medal.png"
	import sponsor_1 from "../../assets/sponsor_1.png"
	import sponsor_2 from "../../assets/sponsor_2.png"
	import sponsor_3 from "../../assets/sponsor_3.png"
	import sponsor_4 from "../../assets/sponsor_4.png"
	import sponsor_5 from "../../assets/sponsor_5.png"
	import sponsor_6 from "../../assets/sponsor_6.png"
	import Lock from "../../assets/lock.png"

	
	import link from "../../assets/link.png"
	import blast from "../../assets/blast.png"
	import "./index.css"
</script>

<template>
	<div class="home-page">
		<div class="ignite"> 
			<span>Igniting a Revolution in HR Innovation </span> 
			<svg width="117" height="11" viewBox="0 0 117 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" stroke-width="3"/>
			</svg>
		
		</div>
		<div class="bold-hack">	
			<div class="bold-title">
					
					<div class="bold"> <span> getlinked Tech</span>  <img class="light" :src="LightBulb" /> </div>
					<div>		
						<span>Hackathon</span>
						<span class="color">1.0</span>
						<img :src="link" class="link">
						<img :src="blast" class="blast">
					</div>
					<h4> Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h4>
					<button class="register"> Register </button>
					<ul class="count-down">
						<li> <span class="value">00</span> <span class="time">H</span> </li>
						<li> <span class="value">00</span> <span class="time">M</span> </li>
						<li> <span class="value">00</span> <span class="time">S</span> </li>
					</ul>
			</div>
			<img style="width: 100%; max-width: 400px" :src="HackathonGuy" alt="HackathonGuy">
		</div>
		<div class="idea-intro">		
			<img style="margin: 0px auto; width: 100%;height: 100%;" :src="TheBigIdea">
			<div class="introduction">
				<div class="title">
					<span>Introduction to getLinked</span>
					<span class="color">tech Hackthon 1.0</span>
				</div>
				<h4> Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
				</h4>
			</div>
		</div>
		<div class="rules-container">
			<img style="margin: 0px auto; width: 100%;height: 100%;" :src="RulesLady">
			<div class="rules">
				<div class="title">
					<span>Rules and</span>
					<span class="color">Guidelines</span>
				</div>
				<h4>
					Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day:to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
				</h4>
			</div>
		</div>
		<div class="judging-container">
			<img style="margin: 0px auto; width: 100%;height: 100%;" :src="Judging">
			<div class="judging">
				<div class="title">
					<span>Judging Criteria</span>
					<span class="color">Key attributes</span>
				</div>
				<h4>
					<div>
						<span class="color">Innovation and Creativity:</span>
						<span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span>
					</div>
					<div>
						<span class="color"> Functionality: </span>
						<span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span>
					</div>
					<div>
						<span class="color">Impact and Relevance: </span>
						<span>  Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span>
					</div>
					<div>
						<span class="color"> Technical Complexity: </span>
						<span>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span>
					</div>

					<span class="color">Adherence to Hackathon Rules: </span>
					<span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span>
					<br>
				</h4>
				<button>
					Read More
				</button>
			</div>
		</div>

		<div class="faq">
			<div class="title">
				<span>Frequently Asked</span>
				<span class="color">Questions</span>
			</div>
			<h4>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0 </h4>
			<div class="q-block">
				
			</div>
			<img :src="FaqImage">
		</div>
		<div class="timeline">
			<div class="title">
				<span>Timeline</span>
			</div>
			<h4>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0 </h4>
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Hackathon Announcement </span>
					<span > The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register </span>
				</div>
				<div class="t-block-two"> <h3 class="number">1</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Teams Registration begins </span>
					<span > Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</span>
				</div>
				<div class="t-block-two"> <h3 class="number">2</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>		
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Teams Registration ends </span>
					<span >  Interested Participants are no longer Allowed to register</span>
				</div>
				<div class="t-block-two"> <h3 class="number">3</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>		
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Announcement of the accepted teams and ideas </span>
					<span > All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</span>
				</div>
				<div class="t-block-two"> <h3 class="number">4</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>		
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Getlinked Hackathon 1.0 Offically Begins </span>
					<span >Accepted teams can now proceed to build their ground breaking skill driven solutions</span>
				</div>
				<div class="t-block-two"> <h3 class="number">5</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>		
			<div class="t-block">
				<div class="t-block-one">
					<span class="color"> Demo Day </span>
					<span >Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</span>
				</div>
				<div class="t-block-two"> <h3 class="number">6</h3> <h3 class="date">November 18, 2023</h3> </div>
			</div>
		</div>
		<div class="prizes">
			<div class="title">
				<span>Prizes and</span>
				<span class="color">Rewards</span>
			</div>
			<h4> Highlight of the prizes or rewards for winners and for participants. </h4>
			<img :src="rewards">
			<div class="prize-range">
				<div>
					<img :src="Silver">
					<h4>2nd <br> Runner</h4>
					<h3>N300,000</h3>
				</div>
				<div class="first">
					<img :src="Gold">
					<h4>1st <br> Runner</h4>
					<h3>N400,000</h3>
				</div>
				<div>
					<img :src="Bronze">
					<h4>3rd <br> Runner</h4>
					<h3>N150,000</h3>
				</div>
			</div>
		</div>
		<div class="sponsors">
			<div class="title">
				<span>Partners and Sponsors </span>
			</div>
			<h4>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors </h4>
			<div class="s-block">
				<div class="br">					
					<div class="sp"> <img :src="sponsor_1"> </div>
					<div class="vertical"></div>
					<div class="sp"> <img :src="sponsor_2"></div>
					<div class="vertical"></div>
					<div class="sp"> <img :src="sponsor_3"></div>
				</div>
				<div class="br">
					<div class="horizontal"></div>
					<div class="horizontal middle"></div>
					<div class="horizontal"></div>
				</div>
				<div class="br">
					<div class="sp"> <img :src="sponsor_4"></div>
					<div class="vertical"></div>
					<div class="sp"> <img :src="sponsor_5"></div>
					<div class="vertical"></div>
					<div class="sp"> <img :src="sponsor_6"></div>
				</div>
			</div>
		</div>
		<div class="privacy-policy">
			<div class="title">
				<span>Privacy Policy and </span>
				<span class="color">Terms </span>
			</div>
			<h4 style="margin-bottom: 40px"> Last updated September 12, 2023 </h4>
			<h4> Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant </h4>
			<div class="privacy-block">
				<h4>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</h4>
				<h4 class="bold color"> Licensing Policy </h4>
				<h4 class="bold"> Here are terms of our Standard License: </h4>
				<ul>
					<li> 
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
							<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
						</svg>
						<span> The Standard License grants you a non-exclusive right to navigate and register for our event </span>
					</li>	
					<li> 
						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
							<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
						</svg>
						<span> You are licensed to use the item available at any free source sites, for your project development </span>
					</li>
				</ul>
				<button> Read More</button>
			</div>
		</div>
		<div class="locks">
			<svg width="249" height="311" viewBox="0 0 249 311" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M249 141.364C249 219.82 195.88 293.188 124.5 311C53.12 293.188 0 219.82 0 141.364V56.5455L124.5 0L249 56.5455V141.364ZM124.5 282.727C176.375 268.591 221.333 205.543 221.333 144.474V74.9227L124.5 30.8173L27.6667 74.9227V144.474C27.6667 205.543 72.625 268.591 124.5 282.727ZM163.233 141.364V120.159C163.233 100.368 143.867 84.8182 124.5 84.8182C105.133 84.8182 85.7667 100.368 85.7667 120.159V141.364C77.4667 141.364 69.1667 149.845 69.1667 158.327V207.805C69.1667 217.7 77.4667 226.182 85.7667 226.182H161.85C171.533 226.182 179.833 217.7 179.833 209.218V159.741C179.833 149.845 171.533 141.364 163.233 141.364ZM145.25 141.364H103.75V120.159C103.75 108.85 113.433 101.782 124.5 101.782C135.567 101.782 145.25 108.85 145.25 120.159V141.364Z" fill="url(#paint0_linear_114_900)" fill-opacity="0.14"/>
				<defs>
					<linearGradient id="paint0_linear_114_900" x1="124.5" y1="0" x2="124.5" y2="311" gradientUnits="userSpaceOnUse">
						<stop stop-color="#903AFF"/>
						<stop offset="1" stop-color="#FF26B9"/>
					</linearGradient>
				</defs>
			</svg>
			<img :src="Lock">
		</div>
	</div>
	<FooterView />
</template>

<style scoped>
	.home-page {
		display: flex;
		flex-direction: column;
		padding: 20px 30px;
		position: relative;
		z-index: 100;
		max-width: 1000px;
		margin: 0px auto ;
	}
	.ignite {
		display: flex;
		margin: 0px auto;
		position: relative;
		padding-top: 5px;
	}
	.ignite span {
		font-weight: bold;
		font-size: 16px;
	}
	.ignite svg {
		position: absolute;
		right: 0;
		top: 25px;
	}
	.bold-title {
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 40px auto;
		font-size: 32px;
		font-weight: bold;
		justify-content: center;
		align-items: center;
	}
	.bold-title img.light {
		height: 15px;
		position: absolute;
		right: 20px;
		top: -10px;
	}
	.bold-title span {
		font-family: Clash Display;
	}
	.bold-title span.color {
		color: #D434FE
	}
	.bold-title div {
		align-items: center;
		display: flex;
		position: relative;
	}
	.bold-title h4 {
		font-size: 13px;
		text-align: center;
		width: 90%;
		margin-top: 10px;
	}
	.bold-title button.register {
		background: linear-gradient(90deg, rgba(144,58,255,1) 0%, rgba(212,52,254,1) 60%, rgba(254,52,185,1) 100%);
		font-size: 14px;
		height: 40px;
		width: 140px;
		outline: none;
		border: none;
		border-radius: 4px;
		margin-top: 30px;
	}
	ul.count-down {
		display: flex;
		margin-top: 20px;
	}
	ul.count-down li {
		margin: 5px 15px ; 
		position: relative;
	}
	ul.count-down li span.value {
		font-size: 48px;
		font-weight: 300;
		font-family: Unica One;
	}
	ul.count-down li span.time {
		font-size: 14px;
		position: absolute;
		right: -10px;
		bottom: 7px;
	}
	.introduction {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.introduction .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.introduction .title span {
		font-family: Clash Display;
	}
	.introduction .title span.color {
		color: #D434FE;
	}
	.introduction h4 {
		font-size: 13px;
		text-align: center;
		line-height: 27.5px
	}
	.rules {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
	}
	.rules .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.rules .title span {
		font-family: Clash Display;
	}
	.rules .title span.color {
		color: #D434FE;
	}
	.rules h4 {
		font-size: 13px;
		text-align: center;
		line-height: 27.5px
	}
	.judging {
		display: flex;
		flex-direction: column;
	}
	.judging .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 20px;
		font-size: 20px;
	}
	.judging .title span {
		font-family: Clash Display;
	}
	.judging .title span.color {
		color: #D434FE;
	}
	.judging h4 { 
		font-size: 12px;
		font-weight: 200;
		text-align: center;
		line-height: 27.5px
	}
	.judging h4 div {
		margin: 20px 0;
	}
	.judging h4 div span {
		line-height: 17px;
	}
	.judging h4 div span.color {
		color: #D434FE
	}
	.judging button {
		background: linear-gradient(90deg, rgba(144,58,255,1) 0%, rgba(212,52,254,1) 60%, rgba(254,52,185,1) 100%);
		font-size: 14px;
		height: 40px;
		width: 140px;
		outline: none;
		border: none;
		border-radius: 4px;
		margin: 30px auto 20px;
	}
	.faq {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.faq .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.faq .title span {
		font-family: Clash Display;
	}
	.faq .title span.color {
		color: #D434FE;
	}
	.faq h4 {
		font-size: 12px;
		font-weight: 200;
		text-align: center;
		line-height: 27.5px
	}
	.timeline .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.timeline .title span {
		font-family: Clash Display;
	}
	.timeline .title span.color {
		color: #D434FE;
	}
	.timeline h4 {
		font-size: 12px;
		text-align: center;
		font-weight: 200;
		line-height: 27.5px
	}
	.timeline div.t-block {
		margin: 15px 0
	}
	.timeline div .t-block-one {
		border-left: 3px solid #D434FE;
		padding-left: 20px;
	}
	.timeline div .t-block-one span {
		font-size: 12px;
		display: block;
	}

	.timeline div .t-block-one span.color {
		margin-bottom: 10px;
		color: #D434FE ;
		font-weight: bold;
	}
	.timeline div .t-block-two {
		display: flex;
		align-items: center;
		margin: 10px 0;
		position: relative;
		left: -8px;
	}
	.timeline div .t-block-two h3 {
		font-size: 12px
	}
	.timeline div .t-block-two h3.number {
		height: 25px;
		width: 25px;
		background: linear-gradient(to left, #903AFF, #D434FE);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 12px;
		margin-right: 10px;
	}
	.prizes {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.prizes .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.prizes .title span {
		font-family: Clash Display;
	}
	.prizes .title span.color {
		color: #D434FE;
	}
	.prizes h4 {
		font-size: 12px;
		font-weight: 200;
		text-align: center;
		line-height: 27.5px
	}
	.prizes div {
		display: flex;
		align-items: center;
	}
	.prizes div div {
		display: flex;
		flex-direction: column;
		background: #d434fe12;
		border: 1px solid #D434FE;
		border-radius: 10px;
		position: relative;
		padding: 45px 10px 20px;
		font-size: 12px;
		margin: 125px 5px 100px;
	}
	.prizes div div.first {
		padding: 75px 15px 20px;
		background: #903AFF12;
		border-color: #903AFF;

	}
	.prizes div div img {
		position: absolute;
		top: -40px;
	}
	.prizes div div.first img {
		top: -70px;
	}
	.prizes div div h3 {
		color: #D434FE;
	}
	.prizes div div.first h3 {
		color: #903AFF;
	}
	.sponsors {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sponsors .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.sponsors .title span {
		font-family: Clash Display;
	}
	.sponsors .title span.color {
		color: #D434FE;
	}
	.sponsors h4 {
		font-size: 12px;
		font-weight: 200;
		text-align: center;
		line-height: 27.5px
	}
	.sponsors div.s-block {
		border: 1px solid #D434FE;
		border-radius: 10px;
		padding: 20px 30px;
		justify-content: space-between;
	}
	.sponsors .s-block div.br {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
	.sponsors .s-block div.br div.vertical{
		width: 1px;
		height: 40px;
		background: #D434FE;
	}
	.sponsors .s-block div.br div.sp {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sponsors .s-block div.br div.sp img {
		width: 40px;
	}
	.sponsors .s-block div.br div.horizontal{
		width: 60px;
		height: 1px;
		background: #D434FE;
		margin: 5px 5px;
	}
	.privacy-policy {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.privacy-policy .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 40px auto 10px;
		font-size: 20px;
	}
	.privacy-policy .title span {
		font-family: Clash Display;
	}
	.privacy-policy .title span.color {
		color: #D434FE;
	}
	.privacy-policy h4 {
		font-size: 12px;
		text-align: center;
		font-weight: 200;
		line-height: 27.5px
	}
	.privacy-policy .privacy-block {
		padding: 20px;
		border: 1px solid #D434FE;
		border-radius: 10px;
		margin: 20px 0;
		display: flex;
		flex-direction: column;
	}
	.privacy-policy h4.bold {
		font-weight: bold;
		text-align: start;
	}
	.privacy-policy h4.bold.color {
		color: #D434FE;
		margin-top: 30px;
	}
	.privacy-policy ul li {
		display: flex;
		margin: 10px 0
	}
	.privacy-policy ul li svg {
		height: 17px;
		width: 17px
	}
	.privacy-policy ul li span {
		margin-left: 20px;
		width: 95%;
		font-size: 12px;
		line-height: 25.5px;
	}
	.privacy-policy button {
		background: linear-gradient(90deg, rgba(144,58,255,1) 0%, rgba(212,52,254,1) 60%, rgba(254,52,185,1) 100%);
		font-size: 14px;
		height: 40px;
		width: 140px;
		outline: none;
		border: none;
		border-radius: 4px;
		margin: 30px auto 20px;
	}
	.locks {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin: 120px 0 40px;
	}
	.locks svg {
		position: absolute;top: -90px;
	}
	@media only screen and (min-width: 720px) {
		.ignite span {
			font-size: 20px
		}
		.ignite svg {
			top: 30px;
		}
		.ignite {
			margin: 0 10% 60px auto;
		}
		.bold-hack{
			display: flex;
		}
		.idea-intro {
			display: flex;
			margin: 40px 0;
		}
		.introduction {
			margin-left: 30px
		}
		.rules-container {
			display: flex;
			flex-direction: row-reverse;
		}
		.rules {
			margin-right: 30px;
		}
		.judging-container {
			display: flex;
			margin-top: 50px;
		}
		.judging {
			width: 80%;
			margin-left: 30px;
		}
		.judging .title {
			align-items: flex-start;
			width: fit-content;
			margin: 0 0 20px;
		}
		.judging h4 div{
			text-align: start;
			margin: 10px 0;
		}
		.judging h4 div span {
			line-height: 0;
		}
		.judging button {
			margin-left: 0;
		}
		.timeline div.t-block {
			display: flex;
			justify-content: center;
			width: 85%;
			margin: 0px auto;
		}
		.timeline h4 {
			margin-bottom: 50px;
		}
		.timeline div .t-block-one {
			border-right: 3px solid #D434FE;
			border-left: unset;
			padding: 25px 10px;
			width: 50%;
		}
		.timeline div .t-block-two {
			width: 50%;
		}
		.timeline div .t-block-two h3.number {
			position: relative;
			left: -11px;
			border: 6px solid #150e29;
		}
		.timeline div.t-block:nth-child(even) {
			flex-direction: row-reverse;
			right: -20px;
			position: relative;
		}
		.timeline div:nth-child(even) .t-block-one {
			border-right: unset;
			border-left: 3px solid #D434FE;
		}
		.timeline div:nth-child(even) .t-block-two {
			flex-direction: row-reverse;
		}
		.timeline div:nth-child(even) .t-block-two h3 {
			position: relative;
			left: 12px
		}
		.timeline div:nth-child(even) .t-block-two h3.number {
			left: 38px
		}
		.timeline div .t-block-one span {
			text-align: end;
			margin-right: 30px;
		}
		.timeline div:nth-child(even) .t-block-one span {
			text-align: start;
			margin-left: 30px;
		}
		.prizes {
			flex-direction: row;
			justify-content: center;
			position: relative;
		}
		.prizes .title {
			position: absolute;
		}
		.prizes h4 {
			position: absolute;
		}
		.prizes div {
			margin-left: 30px;
		}
	}

/*	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
</svg>
*/
</style>