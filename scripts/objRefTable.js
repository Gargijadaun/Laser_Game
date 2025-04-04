const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.Pin,
		C3.Behaviors.DragnDrop,
		C3.Plugins.TiledBg,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Arr,
		C3.Plugins.Touch,
		C3.Behaviors.Fade,
		C3.Plugins.Date,
		C3.Plugins.Particles,
		C3.Behaviors.Sin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.TiledBg.Acts.SetPos,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.CurX,
		C3.Plugins.Arr.Acts.Reverse,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Exps.LayerNumber,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.max,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Date.Exps.GetDate,
		C3.Plugins.Date.Exps.Now,
		C3.Plugins.Date.Exps.GetMonth,
		C3.Plugins.Date.Exps.GetYear,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Text.Exps.Text
	];
};
self.C3_JsPropNameTable = [
	{Box_White: 0},
	{Box_White2: 0},
	{Box_White3: 0},
	{Box_White4: 0},
	{Box_White5: 0},
	{Box_White6: 0},
	{NameBOX_2: 0},
	{NameBOX_4: 0},
	{NameBOX_5: 0},
	{NameBOX_6: 0},
	{NameBOX_7: 0},
	{NameBOX_8: 0},
	{Text_Option1: 0},
	{Text_Option2: 0},
	{Text_Option3: 0},
	{Text_Option4: 0},
	{Text_Option5: 0},
	{Text_Option6: 0},
	{Pin: 0},
	{Laser_Red: 0},
	{DragDrop: 0},
	{LaserDevice_Red: 0},
	{Laser_Green: 0},
	{LaserDevice_Green: 0},
	{Laser_Blue: 0},
	{LaserDevice_Blue: 0},
	{Tween: 0},
	{TiledBackground2: 0},
	{BG: 0},
	{DermaQuest_Logo: 0},
	{Shape_: 0},
	{Text_Timer: 0},
	{Audio: 0},
	{Browser: 0},
	{ArrayQuestionNumber: 0},
	{TextDebug_QuestionNumber: 0},
	{play: 0},
	{Touch: 0},
	{TextDebug_QuestionArray: 0},
	{TextDebug_ArrayWidth: 0},
	{smile: 0},
	{TextBox_ThankYou: 0},
	{Button_Explore: 0},
	{Text_Home_ThankYou: 0},
	{Text_Home_ThankYou2: 0},
	{Text_Home_ThankYou3: 0},
	{home_Button: 0},
	{Text_HowTo_1: 0},
	{Text_HowTo_Start: 0},
	{Shape_2: 0},
	{Button_Start: 0},
	{Bar_: 0},
	{Bar_2: 0},
	{Clock: 0},
	{Female_Character: 0},
	{Healthy_skin: 0},
	{NameBOX_: 0},
	{NameBOX_3: 0},
	{Text: 0},
	{Fade: 0},
	{correct: 0},
	{incorrect: 0},
	{Diaologue: 0},
	{Sprite3: 0},
	{header: 0},
	{ok_btn: 0},
	{Reward: 0},
	{ScreenshotItAndShowAtThePaymentCounterForDiscount: 0},
	{Shape: 0},
	{Text_Score_1: 0},
	{Sprite4: 0},
	{Text_Score_2: 0},
	{Mute: 0},
	{Text_Mute: 0},
	{Text_BetterLuck: 0},
	{Text_Score_Percent: 0},
	{opps: 0},
	{Text_SkinHealth: 0},
	{Text_Date: 0},
	{Date: 0},
	{Text_Reward: 0},
	{TextDebug_TOpacity: 0},
	{Acne_2: 0},
	{Acne_1: 0},
	{Acne_3: 0},
	{Scar_1: 0},
	{Scar_2: 0},
	{Scar_3: 0},
	{Pigm_1: 0},
	{Pigm_2: 0},
	{Pigm_3: 0},
	{Particles_Correct: 0},
	{Particles_Incorrect: 0},
	{star: 0},
	{Cross_: 0},
	{clock2: 0},
	{clock_title: 0},
	{Text_Timer_Title: 0},
	{Button_Back: 0},
	{Qs1: 0},
	{Qs2: 0},
	{Qs3: 0},
	{Qs4: 0},
	{Qs5: 0},
	{Qs6: 0},
	{Qs7: 0},
	{Qs8: 0},
	{Qs9: 0},
	{Laser_Blue2: 0},
	{LaserDevice_Blue2: 0},
	{Laser_Red2: 0},
	{LaserDevice_Red2: 0},
	{Laser_Green2: 0},
	{LaserDevice_Green2: 0},
	{Laser_Blue3: 0},
	{Laser_Blue4: 0},
	{Laser_Blue5: 0},
	{Laser_Blue6: 0},
	{Laser_Blue7: 0},
	{Laser_Blue8: 0},
	{Laser_Blue9: 0},
	{Laser_Blue10: 0},
	{Laser_Green3: 0},
	{Laser_Green4: 0},
	{Laser_Green5: 0},
	{Laser_Green6: 0},
	{Laser_Green7: 0},
	{Laser_Green8: 0},
	{Laser_Green9: 0},
	{Laser_Green10: 0},
	{Laser_Red3: 0},
	{Laser_Red4: 0},
	{Laser_Red5: 0},
	{Laser_Red6: 0},
	{Laser_Red7: 0},
	{Laser_Red8: 0},
	{Laser_Red9: 0},
	{Laser_Red10: 0},
	{LaserDevice_Blue3: 0},
	{LaserDevice_Blue4: 0},
	{LaserDevice_Blue5: 0},
	{LaserDevice_Blue6: 0},
	{LaserDevice_Blue7: 0},
	{LaserDevice_Blue8: 0},
	{LaserDevice_Blue9: 0},
	{Sine: 0},
	{LaserDevice_Blue10: 0},
	{LaserDevice_Green3: 0},
	{LaserDevice_Green4: 0},
	{LaserDevice_Green5: 0},
	{LaserDevice_Green6: 0},
	{LaserDevice_Green7: 0},
	{LaserDevice_Green8: 0},
	{LaserDevice_Green9: 0},
	{LaserDevice_Green10: 0},
	{LaserDevice_Red3: 0},
	{LaserDevice_Red4: 0},
	{LaserDevice_Red5: 0},
	{LaserDevice_Red6: 0},
	{LaserDevice_Red7: 0},
	{LaserDevice_Red8: 0},
	{LaserDevice_Red9: 0},
	{LaserDevice_Red10: 0},
	{Box_White7: 0},
	{white_box: 0},
	{TFamily_Home: 0},
	{Family_Text_Home: 0},
	{Acne: 0},
	{Scar: 0},
	{Pigm: 0},
	{canPlay: 0},
	{maxTimer: 0},
	{play_time: 0},
	{currentQuestion: 0},
	{OptionNumberChosen: 0},
	{correctAnswer: 0},
	{currentHealth: 0},
	{questionsRemaining: 0},
	{totalOpacity: 0},
	{minOpacity: 0},
	{dy: 0},
	{dx: 0},
	{isPaused: 0},
	{timerCount: 0},
	{QuestionNumber: 0},
	{optionNo: 0},
	{Correct: 0},
	{isTimeUp: 0},
	{currentQues: 0},
	{ansCorrect: 0},
	{Increase: 0}
];

self.InstanceType = {
	Box_White: class extends self.ISpriteInstance {},
	Box_White2: class extends self.ISpriteInstance {},
	Box_White3: class extends self.ISpriteInstance {},
	Box_White4: class extends self.ISpriteInstance {},
	Box_White5: class extends self.ISpriteInstance {},
	Box_White6: class extends self.ISpriteInstance {},
	NameBOX_2: class extends self.ISpriteInstance {},
	NameBOX_4: class extends self.ISpriteInstance {},
	NameBOX_5: class extends self.ISpriteInstance {},
	NameBOX_6: class extends self.ISpriteInstance {},
	NameBOX_7: class extends self.ISpriteInstance {},
	NameBOX_8: class extends self.ISpriteInstance {},
	Text_Option1: class extends self.ITextInstance {},
	Text_Option2: class extends self.ITextInstance {},
	Text_Option3: class extends self.ITextInstance {},
	Text_Option4: class extends self.ITextInstance {},
	Text_Option5: class extends self.ITextInstance {},
	Text_Option6: class extends self.ITextInstance {},
	Laser_Red: class extends self.ISpriteInstance {},
	LaserDevice_Red: class extends self.ISpriteInstance {},
	Laser_Green: class extends self.ISpriteInstance {},
	LaserDevice_Green: class extends self.ISpriteInstance {},
	Laser_Blue: class extends self.ISpriteInstance {},
	LaserDevice_Blue: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	BG: class extends self.ISpriteInstance {},
	DermaQuest_Logo: class extends self.ISpriteInstance {},
	Shape_: class extends self.ISpriteInstance {},
	Text_Timer: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	ArrayQuestionNumber: class extends self.IArrayInstance {},
	TextDebug_QuestionNumber: class extends self.ITextInstance {},
	play: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	TextDebug_QuestionArray: class extends self.ITextInstance {},
	TextDebug_ArrayWidth: class extends self.ITextInstance {},
	smile: class extends self.ISpriteInstance {},
	TextBox_ThankYou: class extends self.ISpriteInstance {},
	Button_Explore: class extends self.ISpriteInstance {},
	Text_Home_ThankYou: class extends self.ITextInstance {},
	Text_Home_ThankYou2: class extends self.ITextInstance {},
	Text_Home_ThankYou3: class extends self.ITextInstance {},
	home_Button: class extends self.ISpriteInstance {},
	Text_HowTo_1: class extends self.ITextInstance {},
	Text_HowTo_Start: class extends self.ITextInstance {},
	Shape_2: class extends self.ISpriteInstance {},
	Button_Start: class extends self.ISpriteInstance {},
	Bar_: class extends self.ISpriteInstance {},
	Bar_2: class extends self.ISpriteInstance {},
	Clock: class extends self.ISpriteInstance {},
	Female_Character: class extends self.ISpriteInstance {},
	Healthy_skin: class extends self.ISpriteInstance {},
	NameBOX_: class extends self.ISpriteInstance {},
	NameBOX_3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	correct: class extends self.ISpriteInstance {},
	incorrect: class extends self.ISpriteInstance {},
	Diaologue: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	header: class extends self.ISpriteInstance {},
	ok_btn: class extends self.ISpriteInstance {},
	Reward: class extends self.ISpriteInstance {},
	ScreenshotItAndShowAtThePaymentCounterForDiscount: class extends self.ISpriteInstance {},
	Shape: class extends self.ISpriteInstance {},
	Text_Score_1: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text_Score_2: class extends self.ITextInstance {},
	Mute: class extends self.ISpriteInstance {},
	Text_Mute: class extends self.ITextInstance {},
	Text_BetterLuck: class extends self.ITextInstance {},
	Text_Score_Percent: class extends self.ITextInstance {},
	opps: class extends self.ISpriteInstance {},
	Text_SkinHealth: class extends self.ITextInstance {},
	Text_Date: class extends self.ITextInstance {},
	Date: class extends self.IInstance {},
	Text_Reward: class extends self.ITextInstance {},
	TextDebug_TOpacity: class extends self.ITextInstance {},
	Acne_2: class extends self.ISpriteInstance {},
	Acne_1: class extends self.ISpriteInstance {},
	Acne_3: class extends self.ISpriteInstance {},
	Scar_1: class extends self.ISpriteInstance {},
	Scar_2: class extends self.ISpriteInstance {},
	Scar_3: class extends self.ISpriteInstance {},
	Pigm_1: class extends self.ISpriteInstance {},
	Pigm_2: class extends self.ISpriteInstance {},
	Pigm_3: class extends self.ISpriteInstance {},
	Particles_Correct: class extends self.IParticlesInstance {},
	Particles_Incorrect: class extends self.IParticlesInstance {},
	star: class extends self.ISpriteInstance {},
	Cross_: class extends self.ISpriteInstance {},
	clock2: class extends self.ISpriteInstance {},
	clock_title: class extends self.ISpriteInstance {},
	Text_Timer_Title: class extends self.ITextInstance {},
	Button_Back: class extends self.ISpriteInstance {},
	Qs1: class extends self.ITextInstance {},
	Qs2: class extends self.ITextInstance {},
	Qs3: class extends self.ITextInstance {},
	Qs4: class extends self.ITextInstance {},
	Qs5: class extends self.ITextInstance {},
	Qs6: class extends self.ITextInstance {},
	Qs7: class extends self.ITextInstance {},
	Qs8: class extends self.ITextInstance {},
	Qs9: class extends self.ITextInstance {},
	Laser_Blue2: class extends self.ISpriteInstance {},
	LaserDevice_Blue2: class extends self.ISpriteInstance {},
	Laser_Red2: class extends self.ISpriteInstance {},
	LaserDevice_Red2: class extends self.ISpriteInstance {},
	Laser_Green2: class extends self.ISpriteInstance {},
	LaserDevice_Green2: class extends self.ISpriteInstance {},
	Laser_Blue3: class extends self.ISpriteInstance {},
	Laser_Blue4: class extends self.ISpriteInstance {},
	Laser_Blue5: class extends self.ISpriteInstance {},
	Laser_Blue6: class extends self.ISpriteInstance {},
	Laser_Blue7: class extends self.ISpriteInstance {},
	Laser_Blue8: class extends self.ISpriteInstance {},
	Laser_Blue9: class extends self.ISpriteInstance {},
	Laser_Blue10: class extends self.ISpriteInstance {},
	Laser_Green3: class extends self.ISpriteInstance {},
	Laser_Green4: class extends self.ISpriteInstance {},
	Laser_Green5: class extends self.ISpriteInstance {},
	Laser_Green6: class extends self.ISpriteInstance {},
	Laser_Green7: class extends self.ISpriteInstance {},
	Laser_Green8: class extends self.ISpriteInstance {},
	Laser_Green9: class extends self.ISpriteInstance {},
	Laser_Green10: class extends self.ISpriteInstance {},
	Laser_Red3: class extends self.ISpriteInstance {},
	Laser_Red4: class extends self.ISpriteInstance {},
	Laser_Red5: class extends self.ISpriteInstance {},
	Laser_Red6: class extends self.ISpriteInstance {},
	Laser_Red7: class extends self.ISpriteInstance {},
	Laser_Red8: class extends self.ISpriteInstance {},
	Laser_Red9: class extends self.ISpriteInstance {},
	Laser_Red10: class extends self.ISpriteInstance {},
	LaserDevice_Blue3: class extends self.ISpriteInstance {},
	LaserDevice_Blue4: class extends self.ISpriteInstance {},
	LaserDevice_Blue5: class extends self.ISpriteInstance {},
	LaserDevice_Blue6: class extends self.ISpriteInstance {},
	LaserDevice_Blue7: class extends self.ISpriteInstance {},
	LaserDevice_Blue8: class extends self.ISpriteInstance {},
	LaserDevice_Blue9: class extends self.ISpriteInstance {},
	LaserDevice_Blue10: class extends self.ISpriteInstance {},
	LaserDevice_Green3: class extends self.ISpriteInstance {},
	LaserDevice_Green4: class extends self.ISpriteInstance {},
	LaserDevice_Green5: class extends self.ISpriteInstance {},
	LaserDevice_Green6: class extends self.ISpriteInstance {},
	LaserDevice_Green7: class extends self.ISpriteInstance {},
	LaserDevice_Green8: class extends self.ISpriteInstance {},
	LaserDevice_Green9: class extends self.ISpriteInstance {},
	LaserDevice_Green10: class extends self.ISpriteInstance {},
	LaserDevice_Red3: class extends self.ISpriteInstance {},
	LaserDevice_Red4: class extends self.ISpriteInstance {},
	LaserDevice_Red5: class extends self.ISpriteInstance {},
	LaserDevice_Red6: class extends self.ISpriteInstance {},
	LaserDevice_Red7: class extends self.ISpriteInstance {},
	LaserDevice_Red8: class extends self.ISpriteInstance {},
	LaserDevice_Red9: class extends self.ISpriteInstance {},
	LaserDevice_Red10: class extends self.ISpriteInstance {},
	Box_White7: class extends self.ISpriteInstance {},
	white_box: class extends self.ISpriteInstance {},
	TFamily_Home: class extends self.ISpriteInstance {},
	Family_Text_Home: class extends self.ITextInstance {},
	Acne: class extends self.ISpriteInstance {},
	Scar: class extends self.ISpriteInstance {},
	Pigm: class extends self.ISpriteInstance {}
}