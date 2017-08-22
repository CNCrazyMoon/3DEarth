/**
 * 以拍电影的方式来解释 three.js 过程,浅显易懂
 *
 * @author zongxi.luo
 * @date 2017-5-27
 *
 * 代码不具参考性,仅做示例使用.
 * 实际项目中视情况进行封装
 */

var mesh, geometry, material, scene, camera, renderer, loader;

// 设置场景 ,(开始布置场景)
scene = new THREE.Scene();
// 设置相机模式 ,(挑选相机)
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置renderer模式, (导演登场)
renderer = new THREE.WebGLRenderer();
//设置尺寸,导演决定场景大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 设置尺寸
// renderer.setSize(400, 400);

//准备阶段,导演率领兵马进入影棚
document.body.appendChild(renderer.domElement);

// 化妆师入场
loader = new THREE.TextureLoader();

// 化妆师开始工作,该行为是异步的
loader.load('./img/earth.jpg', function(texture) {
	geometry = new THREE.SphereGeometry(15, 32, 32); // 定义铠甲规格
	material = new THREE.MeshBasicMaterial({
		map: texture,
		overdraw: 0.5
	}); //定义铠甲造型\材料
	mesh = new THREE.Mesh(geometry, material); //演员盛装打扮
	scene.add(mesh); //演员进入场景
});


//相机后移,调整到合适的距离让主角在可识范围
camera.position.z = 40;

var render = function() {
	// requestAnimationFrame 用于替代 setInterval ,在不支持该接口的浏览器中能进行安全回退为setInterval
	requestAnimationFrame(render);
	// 加入动画,演员开始跳舞
	mesh && (mesh.rotation.x += 0.00218);
	mesh && (mesh.rotation.y += 0.0058);

	// 决定好了,导演通知大家开机
	renderer.render(scene, camera);
};


render(); // WellDone