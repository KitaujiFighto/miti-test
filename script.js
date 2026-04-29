// 6种常规大学生内耗人格（无恋爱/匹配，纯内耗解析）
const typeList = [
    {
        title: "思绪过载空想家",
        desc: "大脑常年高速运转，反复复盘过往、脑补未知场景，行动力被过度思考完全消耗，陷入想得多、做得少的内耗循环。",
        avatar: "img1.png",
        analysis: "你属于高敏感型内耗人格，对自身言行、他人态度过度关注，大脑长期处于“反刍思考”状态，即便身处休息状态，精神也无法真正放松，是大学生群体中最典型的脑力内耗类型。",
        source: "核心根源在于**过度追求自我认可+在意他人评价**，习惯将小事放大，对未发生的事产生灾难性脑补，同时缺乏及时停止思考的自控力，导致精神持续透支。",
        growth: "1. 设定「思考截止时间」，纠结小事超过10分钟立刻转移注意力；2. 把脑中想法写在纸上，梳理后主动清空思绪；3. 每天留15分钟放空时间，让大脑强制休息；4. 专注当下动作，减少对过去和未来的过度遐想。"
    },
    {
        title: "高敏情绪接收器",
        desc: "共情力远超常人，极易被他人负面情绪感染，习惯性承接他人情绪，最终导致自身情绪积压，陷入被动式精神内耗。",
        avatar: "img2.png",
        analysis: "你拥有极强的情绪感知能力，能轻易捕捉身边人的情绪变化，但缺乏情绪边界感，会不自觉把他人的情绪压力归为自己的责任，长期承接负面情绪，进而产生身心俱疲的情绪内耗。",
        source: "本质是**情绪边界模糊+自我价值感依附他人**，习惯通过照顾他人情绪获得认可，不懂区分“自己的情绪”和“他人的情绪”，最终被外界情绪牵着走。",
        growth: "1. 建立情绪边界，默念「他人情绪与我无关」；2. 远离持续传递负面情绪的环境；3. 学会情绪剥离，不轻易代入他人的处境与感受；4. 把注意力放回自身情绪，优先照顾自己的感受。"
    },
    {
        title: "极致完美主义者",
        desc: "做事追求零瑕疵，害怕失败与负面评价，要么做到极致，要么直接放弃，被“不完美”裹挟，陷入焦虑式内耗。",
        avatar: "img3.png",
        analysis: "你是典型的完美主义内耗，对自己设定极高标准，无法接受过程中的失误，总担心做得不够好、被他人否定，进而产生提前焦虑、拖延逃避、事后自责的连锁内耗反应。",
        source: "根源是**害怕失败的恐惧心理+非黑即白的思维模式**，将“做事结果”等同于“自我价值”，认为不完美就是失败，从而不敢轻易行动，在焦虑中持续消耗自己。",
        growth: "1. 树立「完成比完美更重要」的理念，先完成再优化；2. 降低自我标准，接受合理范围内的不完美；3. 停止灾难化思考，接纳失误是正常现象；4. 拆分目标，从小事开始积累成就感。"
    },
    {
        title: "同辈攀比焦虑者",
        desc: "极易被同辈节奏裹挟，习惯性与他人对比，总觉得自己落后于人，在无意义的攀比中，陷入焦虑自卑的内耗状态。",
        avatar: "img4.png",
        analysis: "你属于外界驱动型内耗，将同龄人作为衡量自己的标准，看到他人进步、优秀就产生自我否定，被内卷环境推着走，失去自身节奏，长期陷入攀比式焦虑内耗。",
        source: "核心是**自我定位模糊+缺乏内在节奏**，过于在意外界竞争环境，把他人的人生轨迹当成自己的参考标准，忽略自身发展节奏，产生盲目焦虑。",
        growth: "1. 减少无意义社交浏览，降低攀比信息输入；2. 梳理自身目标，专注自己的成长节奏；3. 停止横向对比，关注自身每天的小进步；4. 明确每个人发展节奏不同，无需跟风追赶。"
    },
    {
        title: "隐性摆烂内耗者",
        desc: "外表佛系摆烂、无所谓，内心却极度自责愧疚，一边逃避努力，一边自我批判，是最隐蔽的矛盾式内耗。",
        avatar: "img5.png",
        analysis: "你属于矛盾型内耗人格，用摆烂伪装自己，逃避努力后的失败风险，但内心对自己有较高期待，摆烂后又陷入自我否定、愧疚焦虑，在“摆烂-自责-继续摆烂”中循环内耗。",
        source: "根源是**逃避心理+自我期待失衡**，既不想承受努力的压力，又无法接受自己的停滞不前，内心两种想法反复拉扯，形成隐性精神消耗。",
        growth: "1. 接纳偶尔摆烂是正常休息，停止自我攻击；2. 从小任务开始行动，打破摆烂循环；3. 放下过高期待，循序渐进提升自己；4. 区分“休息”和“逃避”，不陷入过度摆烂。"
    },
    {
        title: "讨好型自我消耗者",
        desc: "习惯性迎合他人、委屈自己，不懂拒绝，害怕被讨厌，一味迁就妥协，在压抑自我中，持续消耗内心能量。",
        avatar: "img6.png",
        analysis: "你属于讨好型内耗，将他人感受放在首位，刻意迎合他人期待，不敢表达自身需求，害怕拒绝引发矛盾，长期压抑自我情绪，最终导致内心疲惫、自我价值感降低。",
        source: "本质是**缺乏安全感+害怕被否定**，通过讨好获得他人认可与关系稳定，认为拒绝就是得罪人，从而不断牺牲自我感受，换取他人好感。",
        growth: "1. 练习从小事拒绝他人，建立自我边界；2. 明白真正的关系无需刻意讨好；3. 优先满足自身合理需求，不再委屈自己；4. 接纳自己无法被所有人喜欢。"
    }
];

// 隐藏稀有人格（内耗绝缘体）
const hideType = {
    title: "隐藏 · 内耗通透绝缘体",
    desc: "心态清醒自洽，不纠结过往、不焦虑未来、不在意他人片面评价，情绪自愈力极强，能有效规避精神内耗，拥有稳定的内心状态。",
    avatar: "hide.png",
    analysis: "你是极其稀有的内耗绝缘体人格，拥有清晰的自我认知与强大的内心定力，能理性区分可控与不可控之事，不会被外界干扰、情绪裹挟，始终保持稳定的精神状态。",
    source: "无明显内耗根源，自带通透的处世心态，懂得接纳自我、专注当下，拥有极强的情绪调节能力与自我认可感，不会陷入无意义的精神消耗。",
    growth: "1. 继续保持当下的心态与节奏，坚守自我；2. 适度共情他人，不被外界负面情绪影响；3. 持续关注自我成长，保持内心自洽；4. 用自身状态带动身边人走出内耗。"
};

// 页面切换
function startQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
}

// 折叠面板切换
function toggleCollapse(id) {
    const content = document.getElementById(id);
    const arrow = content.previousElementSibling.querySelector('.arrow');
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.textContent = "▼";
    } else {
        content.style.display = "block";
        arrow.textContent = "▲";
    }
}

// 计算结果（适配24道题，6常规+1隐藏）
function calcResult() {
    let score = 0;
    // 遍历24道题目
    for (let i = 1<= 24; i++) {
        let val = document.querySelector(`input[name="q${i}"]:checked`);
        if (!val) {
            alert("请完成所有24道题目再提交！");
            return;
        }
        score += Number(val.value);
    }

    let resTitle, resDesc, resAnalysis, resSource, resGrowth, resAvatar;
    // 10%概率触发隐藏人格
    const randomRate = Math.random();
    if< 0.1) {
        resTitle = hideType.title;
        resDesc = hideType.desc;
        resAnalysis = hideType.analysis;
        resSource = hideType.source;
        resGrowth = hideType.growth;
        resAvatar = hideType.avatar;
    } else {
        // 24题总分24-72，划分6种人格
        let idx;<= 36) idx = 0;
        else<= 44) idx = 1;
        else if (<= 50) idx = 2;
<= 56) idx = 3;
        else<= 62) idx = 4;
        else idx = 5;

        const currentType = typeList[idx];
        resTitle = currentType.title;
        resDesc = currentType.desc;
        resAnalysis = currentType.analysis;
        resSource = currentType.source;
        resGrowth = currentType.growth;
        resAvatar = currentType.avatar;
    }

    // 渲染结果
    document.getElementById("res-title").innerText = resTitle;
    document.getElementById("res-desc").innerText = resDesc;
    document.getElementById("avatar-img").src = resAvatar;
    document.getElementById("analysis").innerText = resAnalysis;
    document.getElementById("source").innerText = resSource;
    document.getElementById("growth").innerText = resGrowth;

    // 切换结果页
    document.getElementById("quiz-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";
}

// 重新测试
function resetPage() {
    window.location.reload();
}