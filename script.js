const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("#languageToggle");

const textTranslations = new Map([
  ["跳转到主要内容", "Skip to main content"],
  ["MT50 成绩", "MT50 Results"],
  ["模型架构", "Architecture"],
  ["技术框架", "Framework"],
  ["动态事件", "Event-Adaptive"],
  ["训练数据", "Training Data"],
  ["实验演示", "Demos"],
  ["机器人动作，不只是连续数字", "Robot actions are more than continuous numbers"],
  ["一次操作天然由若干持续时间不同的事件构成：接近、接触、抓取、搬运与放置。共享框架先学习事件边界与时长，再由 HEAT 或 Continuous-HEAT 接口保留真实执行所需的连续精度。", "A manipulation naturally consists of events with different durations: approach, contact, grasp, transport, and placement. The shared framework first learns event boundaries and durations, then uses the HEAT or Continuous-HEAT interface to preserve the continuous precision required for execution."],
  ["自适应时序", "Adaptive timing"],
  ["根据动作变化学习事件边界，把更多表示能力分配给接触与转换阶段，把稳定运动压缩为更长事件。", "Learn event boundaries from action changes, devote more representational capacity to contact and transitions, and compress steady motion into longer events."],
  ["双路径事件接口", "Two event interfaces"],
  ["HEAT 采用离散 token 与连续残差，Continuous-HEAT 采用连续事件潜变量；二者共享事件语义与持续时间建模。", "HEAT uses discrete tokens with continuous residuals, while Continuous-HEAT uses continuous event latents. Both share event semantics and duration modeling."],
  ["短时域闭环", "Short-horizon closed loop"],
  ["先预测完整事件计划，再只执行前几个动作并重新观察环境，降低接触误差与环境变化的累积影响。", "Predict a complete event plan, execute only the first few actions, and observe again to reduce accumulated contact error and environmental drift."],
  ["发布信息", "Release"],
  ["通用具身智能模型", "Generalist Embodied Intelligence Model"],
  ["以可变时长事件为动作的基本单元，让视觉、语言与连续控制在一个紧凑模型中协同工作。HEAT 与 Continuous-HEAT 在同一事件动作框架下，以两种接口实现面向机器人操作的精细控制。", "Using variable-duration events as the basic unit of action, Maxwell unifies vision, language, and continuous control in a compact model. HEAT and Continuous-HEAT provide two interfaces within one event-action framework for precise robotic manipulation."],
  ["论文 / 技术报告", "Paper / Technical Report"],
  ["查看论文 PDF", "Open PDF"],
  ["开源代码", "Source Code"],
  ["模型权重", "Model Weights"],
  ["即将发布", "Coming soon"],
  ["完整模型参数规模（含动作头）", "Full model parameters (including action head)"],
  ["训练数据帧规模", "Training data frames"],
  ["MetaWorld MT50 平均成功率", "MetaWorld MT50 average success rate"],
  ["性能指标打破 MetaWorld 权威榜单纪录", "Record-breaking performance on the MetaWorld benchmark"],
  ["平均成功率", "Average success rate"],
  ["四档难度成功率均值 · 总成功率 92.20%（2305 / 2500 条轨迹成功）", "Mean of the four difficulty-tier success rates · Overall 92.20% (2305 / 2500 trajectories)"],
  ["28 项任务 · 1292 / 1400", "28 tasks · 1292 / 1400"],
  ["11 项任务 · 507 / 550", "11 tasks · 507 / 550"],
  ["6 项任务 · 287 / 300", "6 tasks · 287 / 300"],
  ["5 项任务 · 219 / 250", "5 tasks · 219 / 250"],
  ["评测覆盖", "Evaluation coverage"],
  ["项任务", "tasks"],
  ["条轨迹", "trajectories"],
  ["档难度", "difficulty tiers"],
  ["以上为项目评测数据；榜单表述依据项目所采用的 MetaWorld 公开榜单比较口径。", "These are project evaluation results. The leaderboard claim follows the comparison protocol used by the public MetaWorld leaderboard referenced by the project."],
  ["机器人动作，不只是连续数字", "Robot actions are more than continuous numbers"],
  ["一次操作天然由若干持续时间不同的事件构成：接近、接触、抓取、搬运与放置。共享框架先学习事件边界与时长，再由 HEAT 或 Continuous-HEAT 接口保留真实执行所需的连续精度。", "A manipulation naturally consists of events with different durations: approach, contact, grasp, transport, and placement. The shared framework first learns event boundaries and durations, then uses the HEAT or Continuous-HEAT interface to preserve the continuous precision required for execution."],
  ["接近目标", "Approach target"],
  ["接触 / 抓取", "Contact / grasp"],
  ["搬运放置", "Transport / place"],
  ["2 帧", "2 frames"],
  ["3 帧", "3 frames"],
  ["学习事件时长，而不是强制等长切分", "Learn event duration instead of enforcing fixed-length segments"],
  ["自适应时序", "Adaptive timing"],
  ["根据动作变化学习事件边界，把更多表示能力分配给接触与转换阶段，把稳定运动压缩为更长事件。", "Learn event boundaries from action changes, devote more representational capacity to contact and transitions, and compress steady motion into longer events."],
  ["双路径事件接口", "Two event interfaces"],
  ["HEAT 采用离散 token 与连续残差，Continuous-HEAT 采用连续事件潜变量；二者共享事件语义与持续时间建模。", "HEAT uses discrete tokens with continuous residuals, while Continuous-HEAT uses continuous event latents. Both share event semantics and duration modeling."],
  ["短时域闭环", "Short-horizon closed loop"],
  ["先预测完整事件计划，再只执行前几个动作并重新观察环境，降低接触误差与环境变化的累积影响。", "Predict a complete event plan, execute only the first few actions, and observe again to reduce accumulated contact error and environmental drift."],
  ["0.8B 主干，1B 完整模型", "0.8B backbone, 1B full model"],
  ["当前模型以 0.8B 多模态主干承接视觉、语言、机器人状态与本体信息，接入事件接口与动作头后，完整参数规模约为 1B。当前 0.8B 主干采用 Qwen3.5 实现；模型的关键设计位于其上的事件动作接口与连续动作生成模块。", "The current model uses a 0.8B multimodal backbone for vision, language, robot state, and embodiment information. With the event interface and action head, the full model contains about 1B parameters. The current 0.8B backbone is implemented with Qwen3.5; the key innovations are the event-action interface and continuous action generation modules built on top."],
  ["3B 全自研主干版本也即将推出。", "A fully in-house 3B backbone is also coming soon."],
  ["0.8B 多模态主干", "0.8B multimodal backbone"],
  ["视觉 · 语言 · 状态 · 本体", "Vision · Language · State · Embodiment"],
  ["事件接口与动作头", "Event interface and action head"],
  ["两种事件参数化路线", "Two event parameterizations"],
  ["≈ 1B 完整模型", "≈ 1B full model"],
  ["包含动作头", "Action head included"],
  ["HEAT / Continuous-HEAT 共享框架", "Shared HEAT / Continuous-HEAT framework"],
  ["查看原图", "View full image"],
  ["两种路线先共享可变时长事件语义，再在面向策略的接口层分化：HEAT 使用 FSQ token、有界连续残差与时长；Continuous-HEAT 使用连续事件潜变量与时长，并衔接 Flow Matching 动作头。", "Both approaches first share variable-duration event semantics, then diverge at the policy interface: HEAT uses FSQ tokens, bounded continuous residuals, and duration; Continuous-HEAT uses continuous event latents and duration before a Flow Matching action head."],
  ["一个事件动作框架，两种实现路线", "One event-action framework, two implementations"],
  ["两种路线共享事件语义与持续时间建模，只在面向策略的事件接口上采用不同参数化方式，并共同服务于紧凑表征、多任务泛化与闭环控制。", "The two approaches share event semantics and duration modeling, differing only in how the policy-facing event interface is parameterized. Both support compact representation, multitask generalization, and closed-loop control."],
  ["从动作变化中发现可变时长事件", "Discover variable-duration events from action changes"],
  ["把连续动作块转化为紧凑、具备持续时间感知的控制单元；训练阶段由动作派生教师提供监督，推理阶段只依赖当前多模态观察。", "Transform continuous action chunks into compact, duration-aware control units. An action-derived teacher provides supervision during training, while inference depends only on the current multimodal observation."],
  ["事件内容", "Event content"],
  ["紧凑动作语义", "Compact action semantics"],
  ["时间结构", "Temporal structure"],
  ["边界 + 显式时长", "Boundary + explicit duration"],
  ["执行机制", "Execution"],
  ["以 FSQ 离散 token 表达事件身份，以有界连续残差保留度量细节，并显式预测事件持续时间。", "Represent event identity with discrete FSQ tokens, retain metric detail with bounded continuous residuals, and explicitly predict event duration."],
  ["策略接口", "Policy interface"],
  ["离散—连续事件表示", "Discrete-continuous event representation"],
  ["保留相同的事件语义与时间抽象，以归一化连续事件潜变量为 Flow Matching 动作生成提供条件。", "Preserve the same event semantics and temporal abstraction, using normalized continuous event latents to condition Flow Matching action generation."],
  ["连续事件潜变量", "Continuous event latent"],
  ["查看统一架构", "View unified architecture"],
  ["事件条件带来稳定增益", "Event conditioning delivers consistent gains"],
  ["每组实验都保持数据、骨干、优化器、流积分步数与执行时域一致。", "Each experiment keeps the data, backbone, optimizer, flow integration steps, and execution horizon fixed."],
  ["CPT 阶段", "CPT stage"],
  ["SFT 阶段", "SFT stage"],
  ["绝对增益", "Absolute gain"],
  ["最大绝对增益", "Largest absolute gain"],
  ["HEAT / No HEAT 匹配消融。这里的 HEAT 表示启用 Continuous-HEAT 事件条件，No HEAT 表示关闭事件通路；结果来自论文所列的单次种子 rollout 评测。", "Matched HEAT / No HEAT ablation. HEAT enables Continuous-HEAT event conditioning, while No HEAT disables the event pathway. Results are from the single-seed rollout evaluation reported in the paper."],
  ["10 项任务平均", "10-task average"],
  ["4 项任务平均", "4-task average"],
  ["3 项任务平均", "3-task average"],
  ["HEAT EventFormer 在论文列出的三组基准中均达到相应表格的最高平均成功率。", "HEAT EventFormer achieves the highest average success rate in each of the three benchmark tables reported in the paper."],
  ["离散 HEAT：更少 token，更高成功率", "Discrete HEAT: fewer tokens, higher success rates"],
  ["离散版 HEAT 用 8 个可变时长事件表示 32 帧动作，每个事件由 FSQ token、连续残差与显式时长组成，再由 EventFormer 自回归预测并以短时域闭环执行。", "Discrete HEAT represents 32 action frames with eight variable-duration events. Each event combines an FSQ token, a continuous residual, and an explicit duration, which EventFormer predicts autoregressively for short-horizon closed-loop execution."],
  ["领先最强对照", "Lead over strongest baseline"],
  ["Book / Caddy 任务达到 100.0%", "Book / Caddy reaches 100.0%"],
  ["Disassemble 任务达到 89.6%", "Disassemble reaches 89.6%"],
  ["Lift / Can 分别达到 94.4% / 79.8%", "Lift / Can reach 94.4% / 79.8%"],
  ["完整 HEAT 达到 62.3%。固定事件时长、仅训练 token 或移除动作修正器都会带来明显下降，说明自适应时序与闭环连续修正共同决定最终控制性能。", "Full HEAT reaches 62.3%. Fixed event duration, token-only training, and removing the action refiner all cause clear drops, showing that adaptive timing and closed-loop continuous correction jointly determine control performance."],
  ["自适应时长与动作修正不可或缺", "Adaptive duration and action refinement both matter"],
  ["消融结果把增益拆到具体组件：离散 token 提供事件身份，连续分支保留度量细节，预测时长与动作修正器负责将紧凑计划可靠地还原为控制轨迹。", "The ablation isolates each component: discrete tokens encode event identity, the continuous branch preserves metric detail, and predicted durations plus the action refiner reliably turn the compact plan back into a control trajectory."],
  ["固定事件时长", "Fixed event duration"],
  ["移除动作修正器", "No action refiner"],
  ["仅 token 策略", "Token-only policy"],
  ["面向不同机器人与任务的数据底座", "A data foundation for diverse robots and tasks"],
  ["训练管线统一整理 16 组 LeRobot v3 数据目录，覆盖不同动作维度、相机数量与采集频率，为视觉语言动作模型提供异构训练语料。", "The training pipeline unifies 16 LeRobot v3 data directories spanning different action dimensions, camera counts, and sampling rates into a heterogeneous corpus for vision-language-action modeling."],
  ["数据目录", "Data directories"],
  ["可读取数据", "Readable data"],
  ["16 组数据，覆盖 9 类来源", "16 datasets from 9 source families"],
  ["动作宽度", "Action width"],
  ["4–14 维", "4-14 dimensions"],
  ["相机数量", "Camera count"],
  ["1–4 路", "1-4 views"],
  ["采集频率", "Sampling rate"],
  ["平均序列", "Average sequence"],
  ["147.3 帧", "147.3 frames"],
  ["OXE 与 RoboCasa 合计占已存储帧数的 88.4%。训练前通过统一 schema 对齐图像、语言、动作、状态与本体描述。", "OXE and RoboCasa account for 88.4% of stored frames. Before training, a unified schema aligns images, language, actions, state, and embodiment descriptions."],
  ["多视角样例。", "Multi-view examples."],
  ["从左至右为 LIBERO、MetaWorld 与 RoboMimic；上排是第三人称视角，下排是腕部视角。", "From left to right: LIBERO, MetaWorld, and RoboMimic. The top row shows third-person views and the bottom row wrist-camera views."],
  ["从仿真到真机", "From simulation to the real world"],
  ["操作能力在不同环境中接受验证。真机实验展示视觉条件下的抓取与搬运；仿真任务覆盖接触、路径规划、容器操作与长序列任务。", "Manipulation is evaluated across environments. Real-robot experiments demonstrate vision-conditioned grasping and transport, while simulation covers contact, path planning, container interaction, and long-horizon tasks."],
  ["全部", "All"],
  ["真机", "Real Robot"],
  ["真机实验 01", "Real Robot 01"],
  ["真机实验 02", "Real Robot 02"],
  ["彩色积木抓取与搬运", "Grasping and transporting colored blocks"],
  ["纸杯抓取与定点放置", "Grasping and placing a paper cup"],
  ["螺母套柱", "Nut assembly"],
  ["抓球入筐", "Basketball dunk"],
  ["绕障按按钮", "Pressing a button around an obstacle"],
  ["开灶放壶", "Turn on stove and place moka pot"],
  ["移杯入微波炉", "Place mug in microwave"],
  ["书本放入收纳盒", "Place book in caddy"],
]);

const attributeTranslations = new Map([
  ["中国科学院工业人工智能研究所", "Institute of AI for Industries, Chinese Academy of Sciences"],
  ["主导航", "Main navigation"],
  ["Maxwell 首页", "Maxwell home"],
  ["打开导航", "Open navigation"],
  ["导航菜单", "Navigation menu"],
  ["Maxwell 控制机械臂抓取并移动纸杯的真机实验", "Real-robot experiment in which Maxwell grasps and moves a paper cup"],
  ["动态事件划分交互演示", "Interactive event-adaptive segmentation demo"],
  ["论文与模型发布信息", "Paper and model release information"],
  ["核心指标", "Key metrics"],
  ["MetaWorld 难度分档成功率", "MetaWorld success rates by difficulty tier"],
  ["事件自适应动作分段示意", "Event-adaptive action segmentation diagram"],
  ["模型参数规模构成", "Model parameter composition"],
  ["HEAT 与 Continuous-HEAT 共享的事件自适应动作表征框架，展示事件边界与持续时间学习，以及离散连续和连续潜变量两种策略接口", "Shared event-adaptive action representation framework for HEAT and Continuous-HEAT, showing event-boundary and duration learning with discrete-continuous and continuous-latent policy interfaces"],
  ["HEAT 与 No HEAT 成功率对照", "HEAT versus No HEAT success rates"],
  ["在相同 CPT 或 SFT 训练阶段内，HEAT 与 No HEAT 在 LIBERO 和 MetaWorld 上的成功率对比", "HEAT versus No HEAT success rates on LIBERO and MetaWorld at matched CPT or SFT stages"],
  ["HEAT 基准成功率", "HEAT benchmark success rates"],
  ["离散 HEAT 基准成功率", "Discrete HEAT benchmark success rates"],
  ["离散 HEAT 与各基准最强对照方法的成功率比较", "Discrete HEAT success rates versus the strongest listed baseline on each benchmark"],
  ["离散 HEAT 在 LIBERO 上的组件消融成功率", "Discrete HEAT component-ablation success rates on LIBERO"],
  ["数据集来源", "Dataset sources"],
  ["16 组训练数据的帧数量与来源占比分布", "Frame counts and source-family shares across 16 training datasets"],
  ["LIBERO、MetaWorld 与 RoboMimic 的第三人称和腕部相机样例", "Third-person and wrist-camera examples from LIBERO, MetaWorld, and RoboMimic"],
  ["演示筛选", "Demo filters"],
  ["机械臂抓取并搬运彩色积木的真机实验", "Real-robot experiment grasping and transporting colored blocks"],
  ["机械臂抓取纸杯并移动到目标位置的真机实验", "Real-robot experiment grasping a paper cup and moving it to a target"],
  ["MetaWorld 螺母套柱仿真任务", "MetaWorld nut assembly simulation task"],
  ["MetaWorld 抓球入筐仿真任务", "MetaWorld basketball dunk simulation task"],
  ["MetaWorld 绕过障碍按下按钮仿真任务", "MetaWorld wall-button simulation task"],
  ["LIBERO 开启炉灶并放置摩卡壶仿真任务", "LIBERO stove and moka-pot simulation task"],
  ["LIBERO 将杯子放入微波炉并关闭炉门仿真任务", "LIBERO mug-in-microwave simulation task"],
  ["LIBERO 将书本放入收纳盒后部仿真任务", "LIBERO book-in-caddy simulation task"],
]);

const siteMetadata = {
  en: {
    title: "MAXWELL | Generalist Embodied Intelligence",
    description: "Maxwell is a generalist embodied intelligence model that connects multimodal understanding with continuous robot control through event-adaptive action representations.",
  },
  zh: {
    title: "MAXWELL | 通用具身智能模型",
    description: "Maxwell 通用具身智能模型：以事件自适应动作表征连接多模态理解与连续机器人控制。",
  },
};

const menuLabels = {
  en: { open: "Open navigation", close: "Close navigation", title: "Navigation menu" },
  zh: { open: "打开导航", close: "关闭导航", title: "导航菜单" },
};

const textBindings = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode = walker.nextNode();

while (textNode) {
  if (!textNode.parentElement.closest("script, style, #languageToggle")) {
    const source = textNode.nodeValue;
    const zh = source.trim();
    const en = textTranslations.get(zh);
    if (en) {
      textBindings.push({
        node: textNode,
        leading: source.match(/^\s*/)[0],
        trailing: source.match(/\s*$/)[0],
        zh,
        en,
      });
    }
  }
  textNode = walker.nextNode();
}

const attributeBindings = [];
document.querySelectorAll("*").forEach((element) => {
  ["aria-label", "alt", "title"].forEach((attribute) => {
    const zh = element.getAttribute(attribute);
    const en = attributeTranslations.get(zh);
    if (en) attributeBindings.push({ element, attribute, zh, en });
  });
});

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  const useEnglish = language === "en";

  textBindings.forEach(({ node, leading, trailing, zh, en }) => {
    node.nodeValue = `${leading}${useEnglish ? en : zh}${trailing}`;
  });
  attributeBindings.forEach(({ element, attribute, zh, en }) => {
    element.setAttribute(attribute, useEnglish ? en : zh);
  });

  const metadata = siteMetadata[language];
  document.documentElement.lang = useEnglish ? "en" : "zh-CN";
  document.documentElement.dataset.language = language;
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content = metadata.description;
  languageToggle.textContent = useEnglish ? "中文" : "EN";
  languageToggle.setAttribute("aria-label", useEnglish ? "Switch to Chinese" : "切换至英文");
  languageToggle.title = useEnglish ? "Switch to Chinese" : "切换至英文";

  const menuIsOpen = header.classList.contains("menu-active");
  menuButton.setAttribute("aria-label", menuIsOpen ? menuLabels[language].close : menuLabels[language].open);
  menuButton.title = menuLabels[language].title;
  const eventFrame = document.querySelector('.event-lab-frame iframe');
  if (eventFrame?.contentWindow) eventFrame.contentWindow.postMessage({ type: "heat-demo-language", language }, "*");
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "zh" : "en");
});

setLanguage("en");

document.querySelector('.event-lab-frame iframe')?.addEventListener("load", () => {
  document.querySelector('.event-lab-frame iframe').contentWindow?.postMessage({ type: "heat-demo-language", language: currentLanguage }, "*");
});

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  header.classList.remove("menu-active");
  document.body.classList.remove("nav-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", menuLabels[currentLanguage].open);
}

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-active");
  document.body.classList.toggle("nav-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? menuLabels[currentLanguage].close : menuLabels[currentLanguage].open);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -36px" },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const filterButtons = document.querySelectorAll(".filter-button");
const demoItems = document.querySelectorAll(".demo-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    demoItems.forEach((item) => {
      item.classList.toggle(
        "filtered-out",
        selected !== "all" && item.dataset.group !== selected,
      );
    });
  });
});

const scoreBars = document.querySelector(".score-bars");
if (scoreBars) {
  const scoreObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        scoreBars.classList.add("visible");
        scoreObserver.disconnect();
      }
    },
    { threshold: 0.35 },
  );
  scoreObserver.observe(scoreBars);
}

document.querySelector("#year").textContent = new Date().getFullYear();

window.addEventListener("message", (event) => {
  if (event.data?.type !== "heat-demo-height") return;
  const frame = document.querySelector('.event-lab-frame iframe');
  if (frame && Number.isFinite(event.data.height)) {
    const compactViewport = window.matchMedia("(max-width: 940px)").matches;
    const minimumHeight = compactViewport ? 820 : 650;
    frame.style.height = `${Math.max(minimumHeight, event.data.height)}px`;
  }
});
