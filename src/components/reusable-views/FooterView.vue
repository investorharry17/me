<script setup>
	import { RouterLink } from "vue-router"
</script>
<template>
	<footer>
		<div class="title">
			<span>get</span>
			<span class="color">linked</span>
		</div>
		<h4> Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the Aqfield of technology
		</h4>
		<div class="terms-policy">
			<span>Terms if Use</span>
			<div class="border"></div>
			<span>Privacy Policy</span>
		</div>
		<ul class="links">
			<li> <span class="color b">Useful Links</span> </li>
			<li> <a href=""><span>Overview</span></a> </li>
			<li> <a href=""><span>Timeline</span></a> </li>
			<li> <a href=""><span>FAQs</span></a> </li>
			<li> <RouterLink to="/register" > <span>Register</span> </RouterLink> </li>
			<li> 
				<span></span>
				<div class="socials">
					<span class="color">Follow us</span>
					<a href="">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white"/>
						</svg>
					</a>
					<a href="">						
						<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white"/>
						</svg>
					</a>
					<a href="">						
						<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8"/>
						</svg>
					</a>
					<a href="">						
						<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.94 2.00002C4.93974 2.53046 4.72877 3.03906 4.35351 3.41394C3.97825 3.78883 3.46944 3.99929 2.939 3.99902C2.40857 3.99876 1.89997 3.78779 1.52508 3.41253C1.1502 3.03727 0.939737 2.52846 0.940003 1.99802C0.940268 1.46759 1.15124 0.958988 1.5265 0.584103C1.90176 0.209218 2.41057 -0.00124153 2.941 -0.000976312C3.47144 -0.000711096 3.98004 0.210257 4.35492 0.585517C4.72981 0.960777 4.94027 1.46959 4.94 2.00002ZM5 5.48002H1V18H5V5.48002ZM11.32 5.48002H7.34V18H11.28V11.43C11.28 7.77002 16.05 7.43002 16.05 11.43V18H20V10.07C20 3.90002 12.94 4.13002 11.28 7.16002L11.32 5.48002Z" fill="#F8F8F8"/>
						</svg>
					</a>



				</div>
			</li>
		</ul>
		<ul class="contact">
			<li> <span class="color b">Contact Us</span></li>
			<li> 
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z" fill="#F8F8F8"/>
					<path d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z" fill="#F8F8F8"/>
				</svg>
				<span>+23409876543</span>
			</li>
			<li> 
				<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z" fill="#F8F8F8"/>
				</svg>
				<span>
					27,Alara Street <br>
					Yaba 100012 <br>
					Lagos State
				</span>
			</li>
		</ul>
		<div class="copyright"> All rights reserved. © getlinked Ltd. </div>
	</footer>
</template>
<style scoped>
	footer {
		background: #100b20;
		padding: 40px 50px;
	}
	footer div.title {
		display: flex;
		margin: 10px 0 10px;
	}
	footer div.title span {
		font-size: 20px;
		font-family: Clash Display
	}
	footer div.title span.color {
		color: #D434FE;
	}
	footer h4 {
		font-size: 12px;
		font-weight: 200;
		margin: 20px 0 30px;
		line-height: 25.5px;
	}
	footer .terms-policy {
		display: flex;
		align-items: center;
		margin: 20px 0;
	}
	footer .terms-policy span {
		font-size: 15px;
		font-weight: bold;
	}
	footer .terms-policy div {
		width: 3px;
		background: #D434FE;
		height: 20px;
		margin: 0px 10px;
	} 
	footer .links {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
	}
	footer .links li {
		margin: 10px 0;
	}
	footer .links li span {
		font-size: 12px;
	}
	footer .links li span.color {
		color: #D434FE;
		font-weight: 500;
	}
	footer .links li span.color.b {
		font-size: 14px;
	}
	footer .links li div.socials {
		display: flex;
		align-items: center;
	}
	footer .links li div.socials span {
		margin-right: 10px;
	}
	footer .links li div.socials svg{
		height: 25px;
		width: 25px;
		margin: 0px 10px;
	}
	footer .contact {
		display: flex;
		flex-direction: column;
	}
	footer .contact li {
		display: flex;
		align-items: flex-start;
		margin: 10px 0
	}
	footer .contact li svg {
		height: 25px;
		margin-right: 15px;
	}
	footer .contact li span {
		font-size: 12px;
	}
	footer .contact li span.color.b {
		font-size: 14px;
		color: #D434FE;
	}
	footer .copyright {
		text-align: center;
		margin: 30px 0 10px;
	}
</style>
