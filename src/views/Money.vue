<template>
	<LayOut>
		<div class="money-wrapper">
			<div class="tags-area">
				<div class="tags">
					<ul>
						<li>衣</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
						<li>酒店</li>
						<li>门票</li>
					</ul>
				</div>
				<span class="add-tag">新增标签</span>
			</div>
			<div class="note">
				<label>
					<span>备注</span>
					<input type="text" placeholder="点击添加备注"/>
				</label>
			</div>
			<div class="category">
				<div class="expend">
					<span>支出</span>
				</div>
				<div class="income">
					<span class="income">收入</span>
				</div>
			</div>
			<div class="output">
				<span>100</span>
			</div>
			<div class="number-pad">
				<div class="numbers">
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>删除</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>清空</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button class="ok">保存</button>
					<button>0</button>
					<button class="dot">.</button>
				</div>
			</div>
		</div>
	</LayOut>
</template>

<script lang="ts">
	export default {
		name: 'Money'
	};
</script>

<style lang="scss">
	@import "src/assets/styles/helper.scss";
	.money-wrapper {
		color: #333;
		height: 100%;
		display: grid;
		grid-template-rows: 30% 10% 10% 10% 40%;
		> .tags-area {
			background: white;
			width: 100%;
			position: relative;
			padding: 20px;
			> .tags {
				position: absolute;
				bottom: 50px;
				top: 10px;
				left: 16px;
				right: 16px;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				> ul {
					overflow: scroll;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					> li {
						background: #D9D9D9;
						padding: 0 18px;
						border-radius: 18px;
						font-size: 14px;
						margin: 5px 5px 0 5px;
					}
				}
			}
			> .add-tag {
				padding: 0 2px;
				position: absolute;
				left: 20px;
				bottom: 12px;
				font-size: 14px;
				font-weight: bold;
				color: #999;
				border-bottom: 1px solid #999;
			}
		}
		> .note {
			width: 100%;
			background: #f5f5f5;
			padding: 20px;
			position: relative;
			> label {
				background: #f5f5f5;
				font-size: 14px;
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				> span {
					margin: 0 16px;
				}
				> input {
					border: none;
					background: inherit;
					flex-grow: 1;
					height: 100%;
				}
			}
		}
		> .category {
			background: #c4c4c4;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24px;
			> div {
				width: 50%;
				height: 100%;
				position: relative;
				> span {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
				&.expend {
					position: relative;
					&::after {
						content: '';
						width: 100%;
						height: 4px;
						display: block;
						background: #333;
						position: absolute;
						bottom: 0;
					}
				}
			}
		}
		> .output {
			box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
			position: relative;
			> span {
				position: absolute;
				right: 16px;
				top: 50%;
				transform: translateY(-50%);
				font-family: monospace;
				font-size: 36px;
			}
		}
		> .number-pad {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			> .numbers {
				height: 100%;
				> button {
					font-size: 18px;
					border: none;
					width: 25%;
					height: 25%;
					&.ok {
						float: right;
						height: 50%;
					}
					&.dot {
						width: 50%;
					}
					$bg: #f5f5f5;
					&:nth-child(1) {
						background: $bg;
					}
					&:nth-child(2), &:nth-child(5) {
						background: darken($bg, 4%);
					}
					&:nth-child(3), &:nth-child(6), &:nth-child(9) {
						background: darken($bg, 4%*2);
					}
					&:nth-child(4), &:nth-child(7), &:nth-child(10) {
						background: darken($bg, 4%*3);
					}
					&:nth-child(8), &:nth-child(11), &:nth-child(13) {
						background: darken($bg, 4%*4);
					}
					&:nth-child(14) {
						background: darken($bg, 4%*5);
					}
					&:nth-child(12) {
						background: darken($bg, 4%*6);
					}
				}
			}
		}
	}
</style>
