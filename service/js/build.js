// 建筑数据
const buildings = {
    chengren: {
        title: "诚韧楼（教学）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/chenrenlou.jpg",
        imageTitle: "诚韧楼（教学）",
        imageDescription: "诚韧楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">空调、风扇、多媒体、楼梯上下</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 4 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 5 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    诚韧楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。
                </p>
            </div>
        `
    },
    zhengxin: {
        title: "正心楼（教学）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/zhengxinlou.jpg",
        imageTitle: "正心楼（教学）",
        imageDescription: "正心楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">空调、风扇、多媒体、楼梯上下</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 2 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 5 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    正心楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。
                </p>
            </div>
        `
    },
    zhiyuan: {
        title: "致远楼（教学）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/zhiyuanlou.jpg",
        imageTitle: "致远楼（教学）",
        imageDescription: "致远楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">空调、风扇、多媒体、楼梯上下</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 4 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 5 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    致远楼是校园的教学建筑，配备现代化的教室和教学设施，为师生提供优质的教学环境。
                </p>
            </div>
        `
    },
    heya: {
        title: "和雅楼（行政）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/heyalou.jpg",
        imageTitle: "和雅楼（行政）",
        imageDescription: "和雅楼是校园的行政中心，集中了学校的主要行政管理部门，为学校的日常运作提供支持。",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">办公室、会议室、楼梯上下</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 1 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 4 层，地下 1 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    和雅楼是校园的行政中心，集中了学校的主要行政管理部门，为学校的日常运作提供支持。楼内设有校长办公室、教务处、学生处、财务处等多个行政部门，同时还设有会议室、接待室等公共服务设施。建筑设计庄重大方，体现了学校的管理水平和文化底蕴。
                </p>
            </div>
        `
    },
    liyue: {
        title: "礼乐馆（多功能）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/liyueguan.jpg",
        imageTitle: "礼乐馆（多功能）",
        imageDescription: "多功能建筑",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">多功能教室和专业艺术工具</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 1 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 4 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    礼乐馆是校园的文化活动中心，举办各类文艺演出、学术报告和会议等活动。馆内设有大型剧场、音乐厅、展览厅和会议室等多个功能区域，配备先进的音响、灯光和舞台设备，满足不同类型活动的需求。同时，礼乐馆还设有排练室、化妆间等配套设施，为艺术团体和表演者提供便利。
                </p>
            </div>
        `
    },
    gewu: {
        title: "格物楼（实验）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/gewulou.jpg",
        imageTitle: "格物楼（实验）",
        imageDescription: "格物楼是校园的实验中心，配备实验设备和仪器，支持各类科学研究和实验教学。",
        details: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-calendar text-primary mr-2"></i>
                        <span>主要分配</span>
                    </div>
                    <p class="text-gray-700">空调、实验器材、楼梯上下</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-arrows-alt text-primary mr-2"></i>
                        <span>到达时间</span>
                    </div>
                    <p class="text-gray-700">从校门出发约 2 分钟</p>
                </div>
                <div class="bg-light p-4 rounded-lg">
                    <div class="font-medium mb-1 flex items-center">
                        <i class="fa fa-building text-primary mr-2"></i>
                        <span>建筑层数</span>
                    </div>
                    <p class="text-gray-700">地上 4 层</p>
                </div>
            </div>
            
            <div class="mt-6">
                <p class="text-gray-700 leading-relaxed">
                    格物楼是校园的实验中心，配备实验设备和仪器。
                </p>
            </div>
        `
    },
    // 文渊阁（多功能）
    wenyuan: {
        title: "文渊阁（多功能）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/wenyuange.jpg",
        imageTitle: "文渊阁（多功能）",
        imageDescription: "文渊阁是校园的多功能建筑。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">楼梯上下、空调、音乐教室、信息技术教室、图书馆</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-arrows-alt text-primary mr-2"></i>
                <span>到达时间</span>
            </div>
            <p class="text-gray-700">从校门出发约 3 分钟</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-building text-primary mr-2"></i>
                <span>建筑层数</span>
            </div>
            <p class="text-gray-700">地上 6 层</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            文渊阁是校园的多功能建筑。
        </p>
    </div>
`
    },
    // 尚朴堂（食堂）
    shangpu: {
        title: "尚朴堂（食堂）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/shitang.jpg",
        imageTitle: "尚朴堂（食堂）",
        imageDescription: "尚朴堂是校园的主要食堂，提供多样化的餐饮服务，满足师生的不同需求。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">风扇、楼梯上下</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-arrows-alt text-primary mr-2"></i>
                <span>到达时间</span>
            </div>
            <p class="text-gray-700">从校门出发约 4.5 分钟</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-building text-primary mr-2"></i>
                <span>建筑层数</span>
            </div>
            <p class="text-gray-700">地上 3 层</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            尚朴堂是校园的食堂，提供多样化的餐饮服务，满足师生的不同需求。
        </p>
    </div>
`
    },
    // 寝室
    dorm: {
        title: "寝室",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/qinshi.jpg",
        imageTitle: "学生寝室",
        imageDescription: "学生寝室是学生生活和休息的场所，提供舒适、安全的居住环境。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">空调、楼梯上下</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-arrows-alt text-primary mr-2"></i>
                <span>到达时间</span>
            </div>
            <p class="text-gray-700">从校门出发，男寝约 5 分钟，女寝约 3 分钟</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-building text-primary mr-2"></i>
                <span>宿舍楼数量</span>
            </div>
            <p class="text-gray-700">邵阳市第一中学欢迎您</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            学生寝室分布在校园多个区域，分为多个宿舍楼区。
        </p>
    </div>
`
    },
    // 田径馆（操场）
    track: {
        title: "田径馆（操场）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/tianjingguan.jpg",
        imageTitle: "田径馆（操场）",
        imageDescription: "田径馆是校园的体育活动中心，拥有标准田径场和各类体育设施。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">邵阳市第一中学欢迎您</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-arrows-alt text-primary mr-2"></i>
                <span>到达时间</span>
            </div>
            <p class="text-gray-700">从校门出发约 8 分钟</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-info-circle text-primary mr-2"></i>
                <span>设施</span>
            </div>
            <p class="text-gray-700">标准田径场、足球场、篮球场等</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            田径馆是校园的体育活动中心。
        </p>
    </div>
`
    },
    // 弘毅馆（活动）
    hongyi: {
        title: "弘毅馆（活动）",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/shineihuodongchangguan.jpg",
        imageTitle: "弘毅馆（活动）",
        imageDescription: "弘毅馆是校园的多功能活动中心，举办各类学术报告、文艺演出等。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">邵阳市第一中学欢迎您</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-arrows-alt text-primary mr-2"></i>
                <span>到达时间</span>
            </div>
            <p class="text-gray-700">从校门出发约 7 分钟</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-building text-primary mr-2"></i>
                <span>建筑层数</span>
            </div>
            <p class="text-gray-700">地上 3 层</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            弘毅馆是校园的多功能活动中心，举办各类学术报告、文艺演出和大型会议。
        </p>
    </div>
`
    },
    // 机动车停车位
    carpark: {
        title: "机动车停车位",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/jidongcheP.jpg",
        imageTitle: "机动车停车位",
        imageDescription: "校园内的机动车停车设施。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">停车位</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-car text-primary mr-2"></i>
                <span>车位数量</span>
            </div>
            <p class="text-gray-700">未统计</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-map-marker text-primary mr-2"></i>
                <span>分布区域</span>
            </div>
            <p class="text-gray-700">行政楼前、教学楼周边等</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            邵阳市第一中学欢迎您
        </p>
    </div>
`
    },
    // 非机动车停车位
    bikepark: {
        title: "非机动车停车位",
        location: "路径规划功能未上线，请查看图示！",
        image: "https://sysyzspublic.github.io/sysyz-gis/service/bg/dianpincheP.jpg",
        imageTitle: "非机动车停车位",
        imageDescription: "校园内的非机动车停车设施，为师生提供安全、有序的停车场所。",
        details: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-calendar text-primary mr-2"></i>
                <span>主要分配</span>
            </div>
            <p class="text-gray-700">充电桩</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-bicycle text-primary mr-2"></i>
                <span>车位数量</span>
            </div>
            <p class="text-gray-700">未统计</p>
        </div>
        <div class="bg-light p-4 rounded-lg">
            <div class="font-medium mb-1 flex items-center">
                <i class="fa fa-map-marker text-primary mr-2"></i>
                <span>分布区域</span>
            </div>
            <p class="text-gray-700">教学楼周边</p>
        </div>
    </div>
    
    <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
            校园内的非机动车停车设施分布在专用停车区域，设有电动车充电桩，满足师生的充电需求。
        </p>
    </div>
`
    }
}
