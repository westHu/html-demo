var TreeView = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data  = options.data;
                this._delay = options.delay;
            };

            DataSourceTree.prototype = {

                data: function (options, callback) {
                    var self = this;

                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);

                        callback({ data: data });

                    }, this._delay)
                }
            };

            // INITIALIZING TREE
            var treeDataSource = new DataSourceTree({
                data: [
                    { name: '机械手', type: 'folder', additionalParameters: { id: 'F1' } },
                    { name: '电源模块', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: 'DI模块', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: 'DO模块', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: 'AI模块', type: 'folder', additionalParameters: { id: 'F2' } },
                    { name: '中间继电器', type: 'item', additionalParameters: { id: 'I1' } },
                    { name: '温度控制器', type: 'item', additionalParameters: { id: 'I2' } },
                    { name: '压力变送器', type: 'item', additionalParameters: { id: 'I2' } },
                    { name: '隔离器', type: 'item', additionalParameters: { id: 'I2' } }
                ],
                delay: 400
            });

            var treeDataSource2 = new DataSourceTree({
                data: [
                    { name: 'Test tree 1 <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'Test tree 2 <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-bell-o"></i> Notification', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-bar-chart-o"></i> Assignment', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource3 = new DataSourceTree({
                data: [
                    { name: 'Dashboard <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'View Category <div class="tree-actions"></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: 'AdminEx', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: 'Modern Elements', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource4 = new DataSourceTree({
                data: [
                    { name: '技术部 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: '运行部 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: '维修部 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: '安全保卫部 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: '设备部门<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i>涉外维修部门 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-user"></i>养护部门<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa fa-user "></i>编外人员 <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource5 = new DataSourceTree({
                data: [
                    { name: 'Dashboard<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'View Category<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> User <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa  fa-gear "></i> Works <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            var treeDataSource6 = new DataSourceTree({
                data: [
                    { name: 'Dashboard<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F11' } },
                    { name: 'View Category<div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'folder', additionalParameters: { id: 'F12' } },
                    { name: '<i class="fa fa-user"></i> User <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div><div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I11' } },
                    { name: '<i class="fa fa-calendar"></i> Events <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } },
                    { name: '<i class="fa  fa-gear "></i> Works <div class="tree-actions"><i class="fa fa-plus"></i><i class="fa fa-trash-o"></i><i class="fa fa-refresh"></i></div>', type: 'item', additionalParameters: { id: 'I12' } }
                ],
                delay: 400
            });

            $('#FlatTree').tree({
                dataSource: treeDataSource,
                loadingHTML: '<img src="images/input-spinner.gif"/>',
            });


            $('#FlatTree2').tree({
                dataSource: treeDataSource2,
                loadingHTML: '<img src="images/input-spinner.gif"/>',
            });

            $('#FlatTree3').tree({
                dataSource: treeDataSource3,
                loadingHTML: '<img src="images/input-spinner.gif"/>',
            });

            $('#FlatTree4').tree({
                selectable: false,
                dataSource: treeDataSource4,
                loadingHTML: '<img src="images/input-spinner.gif"/>',
            });


        }

    };

}();