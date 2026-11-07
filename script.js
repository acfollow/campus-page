// 第一步：找到网页中已有的表单、按钮和状态文字。
// # 后面的名称要与 HTML 中的 id 一致。
const form = document.querySelector('#join-form');
const button = document.querySelector('#join-btn');
const statusText = document.querySelector('#status');
// 记住当前报名状态：false 表示尚未报名，true 表示已经报名。
// 刷新网页时，程序重新运行，这个值也会恢复为 false。
let joined = false;

// 第二步：先等待提交。点击报名按钮，或在表单中按回车，才执行下面的操作。
form.addEventListener('submit', (event) => {
  // 第三步：阻止默认的提交和页面跳转，留在当前页面显示结果。
  event.preventDefault();

  // 第四步：把状态取反。false 变成 true，true 变成 false。
  joined = !joined;

  // 第五步：根据状态修改网页上的按钮文字和提示文字。
  // 课堂主要理解这一段；可以只改引号里面的中文，再保存、刷新并检查。
  if (joined) {
    button.textContent = '取消报名';
    statusText.textContent = '报名成功！课堂演示，不会提交真实信息。';
  } else {
    button.textContent = '报名参加';
    statusText.textContent = '尚未报名';
  }

  // 以下是已经准备好的辅助配置，本节先会使用，不要求独立编写。
  // 同步按钮的按下状态，让读屏软件也能获知当前结果。
  button.setAttribute('aria-pressed', String(joined));
  // 已报名时允许直接取消，即使此时清空昵称，也不会被必填校验挡住。
  button.formNoValidate = joined;
});
